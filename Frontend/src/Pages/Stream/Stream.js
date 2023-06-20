import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Stream.css';


function getCurrentUrl(n) {
  let url = window.location.href;
  let urlArray = url.split('/');
  return urlArray[n];
}

class Stream extends React.Component {
  Stream = {
    data: [],
  };
  componentDidMount() {
    const ID = getCurrentUrl(3);
    const Type = getCurrentUrl(4);
    if (Type == "twitch") {
      const url = "https://streamalyzer.herokuapp.com/stats/?VOD=" + "https://www.twitch.tv/videos/" + ID + '&format=json';
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.Stream.data = data[0];
          this.Stream.data.streamerThumbnail =this.Stream.data.streamerThumbnail.replace("%{width}x%{height}", "1280x720");
          this.forceUpdate();
        });
      localStorage.setItem("appState", JSON.stringify(this.state));
    }
    if (Type == "youtube") {
      const url = "https://streamalyzer.herokuapp.com/stats/?VOD=" + "https://www.youtube.com/watch?v=" + ID + '&format=json';
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.Stream.data = data[0];
          this.forceUpdate();
        });
        localStorage.setItem("appState", JSON.stringify(this.state));
    }
    if (Type == "reddit") {
      const url = "https://streamalyzer.herokuapp.com/stats/?VOD=" + "https://www.reddit.com/rpan/r/RedditSessions/" + ID + '&format=json';
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.Stream.data = data[0];
          this.forceUpdate();
        });
        localStorage.setItem("appState", JSON.stringify(this.state));
    }
  }

  render() {
    return (

      <div>
        <div className="Full">
          <div className="Left Column">
            <div className="stream-Info">Streamer Name: {this.Stream.data.streamerName}</div>
            <div className="stream-Thumbnail">
              <img src={this.Stream.data.streamerThumbnail}></img>
            </div>
          </div>

          <div className="Right Column">
            <div className="stream-InfoR">
              Positive Comments: {this.Stream.data.positiveComments}
            </div>
            <div className="stream-InfoR">
              Negative Comments: {this.Stream.data.negativeComments}
            </div>
            <div className="stream-InfoR">
              Neutral Comments: {this.Stream.data.neutralComments}
            </div>
            <div className="stream-InfoR">
              Most Common Word: {this.Stream.data.mostCommonWord}
            </div>
            <div className="stream-InfoR">
              Most Positive User: {this.Stream.data.mostPositiveUser}
            </div>
            <div className="stream-InfoR">
              Most Negative User: {this.Stream.data.mostNegativeUser}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stream;

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from 'formik-chakra-ui';

import { Box, ButtonGroup, Heading } from '@chakra-ui/react';

function Forms() {
  return (
    <div style={{ height: '1000' }}>
      <Formik
        initialValues={{
          streamLink: '',
        }}
        onSubmit={async values => {
          const streamLink = values.streamLink;
          // set the url
          const url =
            'https://streamalyzer.herokuapp.com/stats/?VOD=' +
            streamLink +
            '&format=json';
          // fetch this url
          const response = await axios.get(url);
          const VODID = response.data[0].VOD;

          let StreamType = "";
          // check if streamLink has twitch in it
          if (streamLink.includes('twitch')) {
            StreamType = 'twitch';
            console.log("HEYY")
          }
          else if (streamLink.includes("youtube")) {
            StreamType = 'youtube';
            console.log("HEYY");
          }
          else if (streamLink.includes("reddit")) {
            StreamType = 'reddit';
            console.log("HEYY")
          }

          window.location.href = '/' + VODID + '/' + StreamType;
        }}
      >
        <Form style={{ margin: 10 }}>
          <InputControl name="streamLink" label="Stream Link" placeholder="https://www.twitch.tv/videos/1464261263" />

          <ButtonGroup style={{ marginTop: 10 }}>
            <SubmitButton bg="gray">Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </ButtonGroup>
        </Form>
      </Formik>
      <div style={{ margin: 10 }}>
        ChatWatch is a tool that allows you to anyalyze any past reddit, twtich, and youtube streams. With a little twist of natural language proccessing.
      </div>
      <div style={{ margin: 10 }}>
        Here are some past streams you can try:
        <div style={{ marginTop: 5 }}>
          https://www.twitch.tv/videos/1464261263
        </div>
        <div style={{ }}>
          https://www.youtube.com/watch?v=Aa8o1INxiJs
        </div>
        <div>
          https://www.reddit.com/rpan/r/RedditSessions/uft4ry?related=home
        </div>
      </div>
    </div>
  );
}

export default Forms;

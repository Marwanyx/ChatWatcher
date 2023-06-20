import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import Simple from './Pages/Landing/Landing';
import Stream from './Pages/Stream/Stream';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Simple />} />
          <Route path="/:id/:Type" element={<Stream />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

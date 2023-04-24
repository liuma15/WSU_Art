import React,{Component} from 'react';
import { Routes, Route } from "react-router-dom";
import { Flex, Heading, Image } from "@chakra-ui/react";
import Navbar from './components/Navbar';
import TourListing from './components/TourListing';
import Directory from './components/Directory';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Flex minHeight={'100vh'} direction='column' justifyContent={"space-between"}>
        <Navbar />
        <Routes>
          <Route path="tours" element={<TourListing />} />
          <Route path="directory" element={<Directory />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </Flex>
    )
  }
}

export default App;
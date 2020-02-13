import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

import { Container } from "react-bootstrap";

import FadingTitle from "./FadingTitle";
import Header from "./Header";
import RouterSwitch from "./RouterSwitch";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Container className="App">
        <Header />
        <RouterSwitch />
        <FadingTitle />
        <Footer />
      </Container>
    </Router>
  );
}
export default App;

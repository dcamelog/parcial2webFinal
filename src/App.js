import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import logo from './logo.svg';
import './App.css';
import Bandas from "./components/tabla";
import NavBar from "./components/banner";
import Detail from "./components/banda";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Row>
        <Col>
          <Bandas></Bandas>
        </Col>
        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/bandas/:bandaId" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </Col>


      </Row>
    </div>
  );
}

export default App;

/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Main from './components/Main';
// import { doctors } from './seed';
import Sidebar from './components/Sidebar';
import * as API from './api';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const results = await API.fetchAll();
      setDoctors(results.data);
    };
    fetchAll();
  }, []);

  const fetchByID = async id => {
    const results = await API.fetchById(id);
    setDoctor(results.data[0]);
  };

  return (
    <Container className="p-3">
      <Row>
        <Col lg={4}>
          <Sidebar doctors={doctors} fetchByID={fetchByID} doctor={doctor} />
        </Col>
        <Col lg={8}>
          {doctor === null ? (
            <h4 className="mt-5">
              Please choose one doctor from the list on the left
            </h4>
          ) : (
            <Main doctor={doctor} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;

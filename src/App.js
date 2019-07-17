import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Main from './components/Main';
import { doctors } from './seed';
import Sidebar from './components/Sidebar';

const App = () => {
  const [doctorID, setDoctorID] = useState(0);
  const currentDoc = doctors.find(doc => doc.id === doctorID);
  console.log('doct', currentDoc);
  return (
    <Container className="p-3">
      <Row>
        <Col lg={4}>
          <Sidebar doctors={doctors} setDoctorID={setDoctorID} />
        </Col>
        <Col lg={8}>
          <Main doctor={currentDoc} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

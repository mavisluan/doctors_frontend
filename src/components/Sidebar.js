/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types'

const Sidebar = ({ doctors, setDoctorID }) => (
  <div className="p-3">
    <h1 className="text-primary font-weight-bolder">Notable</h1>
    <h3 className="mt-3">Physicians</h3>
    <ul>
      {doctors.map(doc => (
        <li
          key={doc.id}
          onClick={() => setDoctorID(doc.id)}
          className="doctor-choice pt-2"
        >
          {doc.lastName}, {doc.firstName}
        </li>
      ))}
    </ul>
    <button className="btn btn-primary d-block btn-lg">Logout</button>
  </div>
);

// Sidebar.propTypes = {

// }

export default Sidebar;

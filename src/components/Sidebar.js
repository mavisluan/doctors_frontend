/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types'

const Sidebar = ({ doctors, fetchByID, doctor }) => (
  <div className="p-3">
    <h1 className="text-primary font-weight-bolder">Notable</h1>
    <h3 className="mt-3">Physicians</h3>
    <ul>
      {doctors.map(doc => (
        <li
          key={doc.id}
          onClick={() => fetchByID(doc.id)}
          className={
            doctor && doctor.id === doc.id ? 'bg-primary text-white' : ''
          }
        >
          <span className="p-2">
            {doc.lastName}, {doc.firstName}
          </span>
        </li>
      ))}
    </ul>
    <button className="btn btn-primary d-block btn-lg">Logout</button>
  </div>
);

// Sidebar.propTypes = {

// }

export default Sidebar;

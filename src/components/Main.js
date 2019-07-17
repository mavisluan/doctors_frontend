/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';

const Main = ({ doctor }) => (
  <div>
    <div>
      <h1>
        Dr.{doctor.firstName} {doctor.lastName}
      </h1>
      <div>{doctor.email}</div>
    </div>
    <Table striped bordered hover className="mt-3">
      <thead className="bg-primary text-white">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        {doctor.todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>
              {todo.ptfN} {todo.ptlN}
            </td>
            <td>{todo.time}</td>
            <td>{todo.kind}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

// Main.propTypes = {

// }

export default Main;

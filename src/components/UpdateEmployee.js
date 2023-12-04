// UpdateEmployee.js
import React, { useState } from 'react';

const UpdateEmployee = ({ match }) => {
  const employeeId = match.params.id;
  const [name, setName] = useState(''); // Fetch initial data for the employee

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send updated data to the backend (e.g., API call)
    console.log('Employee updated:', name);
  };

  return (
    <div className="update-employee-container">
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;

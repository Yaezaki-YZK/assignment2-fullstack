// AddEmployee.js
import React, { useState } from 'react';

const AddEmployee = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send data to the backend (e.g., API call)
    console.log('Employee added:', name);
  };

  return (
    <div className="add-employee-container">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;

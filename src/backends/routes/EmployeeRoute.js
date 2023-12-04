const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Import your Employee model

// Route to retrieve all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving employees' });
    }
});

// Route to create a new employee
router.post('/employees', async (req, res) => {
    try {
        const { first_name, last_name, email, gender, salary } = req.body;

        // Validation: Check if the email is unique
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ error: 'Employee with the same email already exists' });
        }

        // Validation: Check if required fields are present
        if (!first_name || !last_name || !email || !salary) {
            return res.status(400).json({ error: 'Required fields are missing' });
        }

        // Validation: Check email format using the validator library

        // Validation: Check gender (if provided)
        if (gender && !['Male', 'Female', 'Other'].includes(gender)) {
            return res.status(400).json({ error: 'Invalid gender' });
        }
        // Create a new employee
        const newEmployee = new Employee({
            first_name,
            last_name,
            email,
            gender,
            salary,
        });

        // Save the new employee to the database
        const savedEmployee = await newEmployee.save();

        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error creating employee' });
    }
});

// Route to retrieve a single employee by their ID
router.get('/employees/:employeeId', async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const employee = await Employee.findById(employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving employee' });
    }
});

// Route to update a single employee by their ID
router.put('/employees/:employeeId', async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const { first_name, last_name, email, gender, salary } = req.body;

        // Update the employee by their ID
        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            {
                first_name,
                last_name,
                email,
                gender,
                salary,
            },
            { new: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error updating employee' });
    }
});

//Route to delete a single employee by their ID
router.delete('/employees/:employeeId', async (req, res) => {
    try {
        const employeeId = req.params.employeeId;

        const deletedEmployee = await Employee.findByIdAndRemove(employeeId);

        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(204).end(); 
    } catch (error) {
        res.status(500).json({ error: 'Error deleting employee' });
    }
});

module.exports = router;

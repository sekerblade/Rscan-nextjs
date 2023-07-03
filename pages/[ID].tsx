import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';

interface Employee {
  ID: number;
  EnrollNumber: string;
  Prefix: string;
  Name: string;
  SureName: string;
  EmployeeCode: string;
  Status: string;
  DeptID: string;
}

const EmployeeDetails = () => {
  const router = useRouter();
  const { ID } = router.query;
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [editData, setEditData] = useState<Employee | (() => Employee)>(() => ({} as Employee));
  const [filteredEmployeeData, setFilteredEmployeeData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch('/api/employee');
        const data = await response.json();
        const employeesWithId: Employee[] = data.map((employee: Employee) => ({
          ...employee,
          id: employee.ID,
        }));
        setEmployeeData(employeesWithId);

        // Filter employee data based on the desired employee ID
        const desiredEmployeeId = Number(ID);
        const filteredEmployee = employeesWithId.find(
          (employee) => employee.ID === desiredEmployeeId
        );
        if (filteredEmployee) {
          // Employee with the desired ID found
          setEmployeeData([filteredEmployee]);
          setEditData(filteredEmployee); // Initialize edit data with the fetched employee data
          setFilteredEmployeeData([filteredEmployee]); // Initialize filteredEmployeeData with the fetched employee data
        } else {
          // Employee with the desired ID not found
          console.error('Employee with ID', desiredEmployeeId, 'not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (ID) {
      fetchEmployeeData();
    }
  }, [ID]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({
      ...(typeof prevData === 'function' ? prevData() : prevData),
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch('/api/employee_update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      if (response.ok) {
        // Employee data updated successfully
        const updatedEmployee = { ...employeeData[0], ...editData }; // Merge the updated data with the existing employee data
        setEmployeeData([updatedEmployee]); // Update the employeeData state with the updated employee

        // Find the index of the updated employee in the filteredEmployeeData array
        const updatedIndex = filteredEmployeeData.findIndex(
          (employee) => employee.ID === updatedEmployee.ID
        );

        if (updatedIndex !== -1) {
          // If the updated employee is found in the filteredEmployeeData array
          const updatedFilteredEmployeeData = [...filteredEmployeeData];
          updatedFilteredEmployeeData[updatedIndex] = updatedEmployee; // Update the employee in the filteredEmployeeData array
          setFilteredEmployeeData(updatedFilteredEmployeeData); // Update the filteredEmployeeData state
        }
      }
    } catch (error) {
      console.error('Error updating employee data:', error);
      // Handle error case
    }
  };

  if (employeeData.length === 0) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" mb={4}>
        ข้อมูลพนักงาน
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="ID"
            label="Employee ID"
            value={(editData as Employee).ID || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="EnrollNumber"
            label="Enroll Number"
            value={(editData as Employee).EnrollNumber || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Prefix"
            label="Prefix"
            value={(editData as Employee).Prefix || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Name"
            label="Name"
            value={(editData as Employee).Name || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="SureName"
            label="Sure Name"
            value={(editData as Employee).SureName || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="EmployeeCode"
            label="Employee Code"
            value={(editData as Employee).EmployeeCode || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="Status"
            label="Status"
            value={(editData as Employee).Status || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="DeptID"
            label="Department ID"
            value={(editData as Employee).DeptID || ''}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Box>
  );  
};

export default EmployeeDetails;

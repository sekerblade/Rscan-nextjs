import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Employee } from '../../types/employee';


const columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 50 },
    { field: 'Prefix', headerName: 'คำนำหน้า', width: 90, editable: true },
    { field: 'Name', headerName: 'ชื่อ', width: 85, editable: true },
    { field: 'SureName', headerName: 'นามสกุล', width: 90, editable: true },
    { field: 'DateTimeLog', headerName: 'Date', width: 105, sortable: false, editable: true },
    { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 110, editable: true },
    { field: 'Status', headerName: 'สถานะ', width: 75, editable: true },
    { field: 'DeptID', headerName: 'แผนก', width: 75, editable: true },
];

const SecretPage: React.FC = () => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the employee records using the search API
                const response = await fetch('/api/search_employee', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // Pass the necessary search parameters
                        ID: 77, // Example value, replace with the actual ID
                        dateStart: '2023-07-01', // Example value, replace with the actual date
                        dateEnd: '2023-07-30', // Example value, replace with the actual date
                    }),
                });

                const data = await response.json();

                // Set the fetched employee records to the state
                setEmployeeData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ height: 450, width: '100%' }}>
            <DataGrid rows={employeeData} columns={columns} />
        </Box>
    );
};

export default SecretPage;

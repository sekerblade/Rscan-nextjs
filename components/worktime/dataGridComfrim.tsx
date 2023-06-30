import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material'
import { Employee } from '../../types/employee';
import { Link } from '@nextui-org/react';
import SearchIcon from '@mui/icons-material/Search';

interface DataGridComfrimProps {
    selectedEmployeeIds: number[]; // Add this prop for selected employee IDs
}


const columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 50 },
    { field: 'Prefix', headerName: 'คำนำหน้า', width: 90, editable: true },
    { field: 'Name', headerName: 'ชื่อ', width: 85, editable: true },
    { field: 'SureName', headerName: 'นามสกุล', width: 90, editable: true },
    { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 105, sortable: false, editable: true },
    { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 110, editable: true },
    { field: 'Status', headerName: 'สถานะ', width: 75, editable: true },
    { field: 'DeptID', headerName: 'แผนก', width: 75, editable: true },
];



export const DataGridComfrim: React.FC<DataGridComfrimProps> = ({ selectedEmployeeIds }) => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('/api/employee');
                const data = await response.json();
                const employeesWithId = data.map((employee: Employee, index: number) => ({
                    ...employee,
                    id: index + 0,
                }));
                setEmployeeData(employeesWithId);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEmployeeData();
    }, []);

    const filteredEmployeeData = employeeData.filter((employee) =>
        selectedEmployeeIds.includes(employee.ID)
    );

    return (
        <>
            <Box>
                <Box sx={{ marginLeft: 43.5, marginBottom: 1 }}>
                    <Link href="secretpage">
                        <Button variant="contained" endIcon={<SearchIcon />}>
                            ค้นหา
                        </Button>
                    </Link>
                </Box>

                <Box sx={{ height: 450, width: '100%' }}>
                    <DataGrid
                        rows={filteredEmployeeData}
                        columns={columns}
                        pageSizeOptions={[10, 15, 25]}
                    />
                </Box>
            </Box>
        </>
    );
};
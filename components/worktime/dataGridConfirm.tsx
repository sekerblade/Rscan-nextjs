import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material'
import { Employee } from '../../types/employee';
import { Link } from '@nextui-org/react';
import SearchIcon from '@mui/icons-material/Search';

interface DataGridConfirmProps {
    selectedEmployeeIds: number[];
    dateStart: Date | null;
    dateEnd: Date | null;
    onSearch: () => void; // Add this line
}


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



export const DataGridConfirm: React.FC<DataGridConfirmProps> = ({
    selectedEmployeeIds,
    dateStart,
    dateEnd,
    onSearch, // Add this line
}) => {
    const [rows, setRows] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('/api/employee');
                const data = await response.json();

                // Assign a unique `id` to each employee data object
                const employeesWithId = data.map((employee: Employee) => ({
                    ...employee,
                    id: employee.ID, // Assuming `ID` is the unique identifier
                }));

                // Filter the data based on the selectedEmployeeIds
                const filteredData = employeesWithId.filter((employee: Employee) =>
                    selectedEmployeeIds.includes(employee.ID)
                );

                setRows(filteredData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEmployeeData();
    }, [selectedEmployeeIds]);



    return (
        <>
            <Box>
                <Box sx={{ marginLeft: 43.5, marginBottom: 1 }}>
                    <Link href="secretpage">
                        <Button variant="contained" endIcon={<SearchIcon />} onClick={onSearch}>
                            ค้นหา
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ height: 450, width: '100%' }}>
                    <DataGrid
                        rows={rows} columns={columns}
                        pageSizeOptions={[10, 15, 25]}
                    />
                </Box>
            </Box>
        </>
    );
};
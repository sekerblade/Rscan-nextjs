import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Employee } from '../../types/employee';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

interface DataGridConfirmProps {
    selectedEmployeeIds: number[];
    dateStart: Date | null;
    dateEnd: Date | null;
    onSearch: (selectedEmployeeIds: number[], dateStart: Date | null, dateEnd: Date | null) => void;
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

const DataGridConfirm: React.FC<DataGridConfirmProps> = ({
    selectedEmployeeIds,
    dateStart,
    dateEnd,
    onSearch,
}) => {
    const router = useRouter();
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

    const handleSearch = () => {
        // Call the onSearch function
        onSearch(selectedEmployeeIds, dateStart, dateEnd);

        // Redirect to the secret page with query parameters
        router.push({
            pathname: '/secretpage',
            query: {
                selectedEmployeeIds: JSON.stringify(selectedEmployeeIds),
                dateStart: dateStart?.toISOString(),
                dateEnd: dateEnd?.toISOString(),
            },
        });
    };

    return (
        <>
            <Box>
                <Box sx={{ marginLeft: 65, marginBottom: 1 }}>
                    <Button variant="contained" endIcon={<SearchIcon />} onClick={handleSearch}>
                        ค้นหา
                    </Button>
                </Box>
                <Box sx={{ height: 600, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSizeOptions={[10, 15, 25]} />
                </Box>
            </Box>
        </>
    );
};

export default DataGridConfirm;

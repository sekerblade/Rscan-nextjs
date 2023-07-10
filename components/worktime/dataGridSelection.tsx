import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material'
import { Employee } from '../../types/employee';

interface DataGridSelectionProps {
    onSelectedEmployeeIdsChange: (selectedIds: number[]) => void;
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

export const DataGridSelection: React.FC<DataGridSelectionProps> = ({ onSelectedEmployeeIdsChange }) => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);
    const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<number[]>([]);


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

    const handleSelectionModelChange = (newSelectionModel: any) => {
        const selectedIds = newSelectionModel.map((rowId: any) => parseInt(rowId as string, 10))
            .map((rowIndex: number) => employeeData[rowIndex].ID);
        setSelectedEmployeeIds(selectedIds);
    };

    const handleConfirmSelection = () => {
        onSelectedEmployeeIdsChange(selectedEmployeeIds);
    };

    return (
        <>
            <Box>
                <Box sx={{ marginLeft: 62, marginBottom: 1 }}>
                    <Button variant="contained" onClick={handleConfirmSelection}>ยืนยันการเลือก</Button>
                </Box>
                <Box sx={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={employeeData}
                        columns={columns}
                        checkboxSelection
                        pageSizeOptions={[10, 15, 25]}
                        onRowSelectionModelChange={handleSelectionModelChange}
                    />
                </Box>
            </Box >

        </>
    )
}

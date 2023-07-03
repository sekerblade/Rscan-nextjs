import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { EmployeeRecords } from '../../types/employeeRecords';
import { useRouter } from 'next/router';

interface SecretPageProps {
    selectedEmployeeIds: number[];
    dateStart: Date | null;
    dateEnd: Date | null;
}

const columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 50 },
    { field: 'Prefix', headerName: 'คำนำหน้า', width: 90, editable: true },
    { field: 'Name', headerName: 'ชื่อ', width: 85, editable: true },
    { field: 'SureName', headerName: 'นามสกุล', width: 90, editable: true },
    { field: 'DateTimeLog', headerName: 'Date', width: 200, sortable: false, editable: true },
    { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 110, editable: true },
    { field: 'Status', headerName: 'สถานะ', width: 75, editable: true },
    { field: 'DeptID', headerName: 'แผนก', width: 75, editable: true },
];

const SecretPage: React.FC<SecretPageProps> = ({
    selectedEmployeeIds,
    dateStart,
    dateEnd,
}) => {
    const router = useRouter();
    const [employeeData, setEmployeeData] = useState<EmployeeRecords[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the query parameters from the router
                const { selectedEmployeeIds, dateStart, dateEnd } = router.query;
                const parsedSelectedEmployeeIds = selectedEmployeeIds
                    ? JSON.parse(selectedEmployeeIds as string)
                    : [];
                const parsedDateStart = dateStart ? new Date(dateStart as string) : null;
                const parsedDateEnd = dateEnd ? new Date(dateEnd as string) : null;

                // Fetch the employee records using the search API
                const response = await fetch('/api/account/search_employees', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        selectedEmployeeIds: parsedSelectedEmployeeIds,
                        dateStart: parsedDateStart?.toISOString(),
                        dateEnd: parsedDateEnd?.toISOString(),
                    }),
                });

                const data = await response.json();
                console.log(data);
                console.log("sdflksdjfsdlkj")

                // Assign a unique id to each employee record
                const employeesWithId = data.map((employee: EmployeeRecords, index: number) => ({
                    ...employee,
                    id: index + 1,
                }));

                // Set the fetched employee records to the state
                setEmployeeData(employeesWithId);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [router.query]);

    return (
        <Box sx={{ height: 450, width: '100%' }}>
            <DataGrid rows={employeeData} columns={columns} />
        </Box>
    );
};

export default SecretPage;
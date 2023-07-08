import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { TabOptions } from '../tabs';

interface EmployeeRecord {
    ID: number;
    EnrollNumber: number;
    DeviceNumber: number;
    VerifyMode: number;
    IOMode: number;
    DateTimeLog: string;
    WorkCode: number;
}

interface SecretPageProps {
    selectedEmployeeIds: number[];
    dateStart: Date | null;
    dateEnd: Date | null;
}

const columns: GridColDef[] = [
    { field: 'ID', headerName: 'ID', width: 50 },
    { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 110 },
    { field: 'DeviceNumber', headerName: 'DeviceNumber', width: 110 },
    { field: 'VerifyMode', headerName: 'VerifyMode', width: 110 },
    { field: 'IOMode', headerName: 'IOMode', width: 110 },
    { field: 'DateTimeLog', headerName: 'Date', width: 200 },
    { field: 'WorkCode', headerName: 'WorkCode', width: 110 },
];

const SecretPage: React.FC<SecretPageProps> = ({
    selectedEmployeeIds,
    dateStart,
    dateEnd,
}) => {
    const router = useRouter();
    const [employeeData, setEmployeeData] = useState<EmployeeRecord[]>([]);



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

                const nestedData = await response.json();

                // Flatten the nested data structure
                const flattenedData = nestedData.flat();

                // Assign a unique id to each employee record
                const employeesWithId = flattenedData.map((employee: EmployeeRecord) => ({
                    ...employee,
                    id: uuidv4(),
                }));

                // Set the fetched employee records to the state
                setEmployeeData(employeesWithId);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
        console.log(employeeData)
    }, [router.query]);

    return (
        <Box>
            <TabOptions />
            <Box sx={{ height: 450, width: '100%' }}>

                <DataGrid
                    rows={employeeData}
                    columns={columns}
                    getRowId={(row) => row.id} // Specify the custom id for each row
                />
            </Box>
        </Box>
    );
};

export default SecretPage;
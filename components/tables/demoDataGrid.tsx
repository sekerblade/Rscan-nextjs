import { GridColDef, GridValueGetterParams, GridRenderCellParams, GridCellEditStopParams, GridCellEditStopReasons, MuiEvent } from '@mui/x-data-grid';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Fab } from '@mui/material';
import { RoomsActions } from './RoomsActions';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import EditEmployee from './editEmployee';


interface Employee {
    ID: number;
    EnrollNumber: number;
    Prefix: string;
    Name: string;
    SureName: string;
    EmployeeCode: string;
    Status: number;
    DeptID: number;
}

export const DataGridDemo = () => {
    const [employeeData, setEmployeeData] = useState<Employee[]>([]);
    const [rowId, setRowId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
    };

    const columns: GridColDef[] = [

        { field: 'ID', headerName: 'ID', width: 50 },

        // {
        //   field: 'fullName',
        //   headerName: 'ชื่อเต็ม',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: true,
        //   width: 160,
        //   valueGetter: (params: GridValueGetterParams) =>
        //     ` ${params.row.Name || ''} ${params.row.SureName || ''}`,
        // },

        { field: 'Prefix', headerName: 'คำนำหน้า', width: 60, editable: true },
        { field: 'Name', headerName: 'ชื่อ', width: 100, editable: true },
        { field: 'SureName', headerName: 'นามสกุล', width: 100, editable: true },
        { field: 'EnrollNumber', headerName: 'EnrollNumber', width: 110, sortable: false, editable: true },
        { field: 'EmployeeCode', headerName: 'EmployeeCode', width: 100, editable: true },
        { field: 'Status', headerName: 'สถานะ', width: 70, editable: true },
        { field: 'DeptID', headerName: 'แผนก', width: 50, editable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 150,
            renderCell: (params: GridRenderCellParams) => (
                <RoomsActions params={{ ...params.row }} />
            ),
        },
        {
            field: 'Editable',
            headerName: 'Edit',
            type: 'actions',
            renderCell: (params: GridRenderCellParams) => (
                <Box
                    sx={{
                        m: 1,
                        position: 'relative',
                    }}
                >
                    {success ? (
                        <Fab
                            color="primary"
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: green[500],
                                '&:hover': { bgcolor: green[700] },
                            }}
                        >
                            <Check />
                        </Fab>
                    ) : (
                        <Fab
                            color="primary"
                            sx={{
                                width: 40,
                                height: 40,
                            }}
                            disabled={params.row !== rowId || loading}
                            onClick={handleSubmit}
                        >
                            <Save />
                        </Fab>
                    )}
                    {loading && (
                        <CircularProgress
                            size={52}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 1,
                            }}
                        />
                    )}
                </Box>
            ),
        },
    ];

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await fetch('/api/employee');
                const data = await response.json();
                const employeesWithId = data.map((employee: Employee, index: number) => ({
                    ...employee,
                    id: index + 1,
                }));
                setEmployeeData(employeesWithId);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEmployeeData();
    }, []);

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarQuickFilter />
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport
                    csvOptions={{
                        utf8WithBom: true
                    }}
                />
            </GridToolbarContainer>
        );
    }


    const csvOptions = {
        utf8WithBom: true,
    };
    return (
        <Box sx={{ height: 667, width: '100%' }}>
            <DataGrid
                rows={employeeData}
                columns={columns}
                slots={{ toolbar: CustomToolbar }}
                slotProps={{
                    columnsPanel: {
                        disableHideAllButton: true,
                        disableShowAllButton: true,
                    },
                    //printOptions: { disableToolbarButton: true }
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,

                        },
                    },
                    columns: {
                        columnVisibilityModel: {
                            // Hide columns 'Prefix' and 'EmployeeCode', the other columns will remain visible
                            Prefix: false,
                            EmployeeCode: false,
                        },
                    },
                }}
                pageSizeOptions={[10, 15, 25]}
                //checkboxSelection
                disableRowSelectionOnClick
                //exportOptions= {csvOptions}
                onCellEditStop={handleSubmit}
            />
        </Box>
    );
};
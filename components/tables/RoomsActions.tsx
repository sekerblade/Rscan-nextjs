import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit, Preview } from '@mui/icons-material'

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

export const RoomsActions = ({ params: employee }: { params: Employee }) => {
    return (
        <>
            <Box>
                <Tooltip title="View Detail">
                    <IconButton onClick={() => { }}>
                        <Preview />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit Employee">
                    <IconButton onClick={() => { }}>
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete Employee">
                    <IconButton onClick={() => { }}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    );
}

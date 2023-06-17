import { Box, Button, IconButton, Tooltip, Modal, Typography, Stack } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';

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

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const RoomsActions = ({ params: employee }: { params: Employee }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box>
                <IconButton onClick={() => { }}>
                    <Tooltip title="View Detail">
                        <Preview />
                    </Tooltip>
                </IconButton>
                <IconButton onClick={() => { }}>
                    <Tooltip title="Edit Employee">
                        <Edit />
                    </Tooltip>
                </IconButton>
                <IconButton onClick={handleOpen}>
                    <Tooltip title="Delete Employee">
                        <Delete />
                    </Tooltip>
                </IconButton>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            ยืนยันการลบพนักงานหรือไม่?
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Are you sure you want to delete this employee?
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            {/* Place delete confirmation logic here */}

                            <Stack spacing={2} direction="row">
                                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} >
                                    ลบพนักงาน
                                </Button>
                                <Button variant="outlined" onClick={handleClose}>ยกเลิก</Button>
                            </Stack>
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </>
    );
};

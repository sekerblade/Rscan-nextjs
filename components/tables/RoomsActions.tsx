import { Box, Button, IconButton, Tooltip, Modal, Typography, Stack } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Employee } from '../../types/employee';

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

    const handleDelete = () => {
        fetch('/api/employee_delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ employeeId: employee.ID }),
        })
            .then((response) => {
                if (response.ok) {
                    // Employee deleted successfully
                    handleClose();
                    window.location.reload();
                } else {
                    // Handle error case
                    console.error('Error deleting employee:', response.status, response.statusText);
                }
            })
            .catch((error) => {
                console.error('Error deleting employee:', error);
                // Handle error case
            });
    };

    return (
        <>
            <Box>
                {/* <IconButton onClick={() => { }}>
                    <Tooltip title="">
                        <Preview />
                    </Tooltip>
                </IconButton> */}

                <IconButton onClick={() => { }}>
                    <Tooltip title="Edit Employee">
                        <Edit />
                    </Tooltip>
                </IconButton>

                <IconButton onClick={handleOpen}>
                    <Tooltip title="">
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
                            <Stack spacing={2} direction="row">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={handleDelete}
                                >
                                    ลบพนักงาน
                                </Button>
                                <Button variant="outlined" onClick={handleClose}>
                                    ยกเลิก
                                </Button>
                            </Stack>
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </>
    );
};

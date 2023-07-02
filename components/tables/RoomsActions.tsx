import { Box, Button, IconButton, Tooltip, Modal, Typography, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Employee } from '../../types/employee';
import { useRouter } from 'next/router';

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
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

<<<<<<< Updated upstream
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
=======
  const handleEdit = () => {
    router.push(`/${employee.ID}`);
  };

  return (
    <>
      <Box>
        <IconButton onClick={handleOpen}>
          <Tooltip title="Delete">
            <Delete />
          </Tooltip>
        </IconButton>
        <IconButton onClick={handleEdit}>
          <Tooltip title="Edit">
            <Edit color="primary" />
          </Tooltip>
        </IconButton>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              ยืนยันการลบพนักงานหรือไม่?
            </Typography>
            <Typography sx={{ mt: 2 }}>
              คุณแน่ใจหรือไม่ว่าจะลบพนักงานคนนี้
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Button
                  variant="contained"
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
>>>>>>> Stashed changes
};

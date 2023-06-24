import React from 'react'
import { useState } from 'react'
import { Box, CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { Employee } from '../../types/employee';


const EditEmployee = ({ params: employee }: { params: Employee }) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [entity, setEntity] = useState({
        EnrollNumber: 0,
        Prefix: "",
        Name: "",
        SureName: "",
        EmployeeCode: "",
        Status: 0,
        DeptID: 0,
        ID: { employeeId: employee.ID }
    })

    // const updateEmployee: Employee = {
    //     EnrollNumber: 0,
    //     Prefix: "",
    //     Name: "",
    //     SureName: "",
    //     EmployeeCode: "",
    //     Status: 0,
    //     DeptID: 0,
    //     ID: 0
    // }

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/account/PUT_account', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            });

            if (response.ok) {
                console.log('Data submitted successfully');
                // Reset form data

                window.location.reload();
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <>
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
                        // disabled={params.id !== rowId || loading}
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
        </>
    )
}

export default EditEmployee;

import React, { useEffect } from 'react'
import { useState } from 'react'
import { Box, CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { Employee } from '../../types/employee';


const EditEmployee = ({
    params,
    rowId,
    setRowId
}: {
    params: Employee;
    rowId: number;
    setRowId: React.Dispatch<React.SetStateAction<any>>;
}) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        if (setRowId) {
            setLoading(true);
            setSuccess(true);
            setRowId(null);
            console.log('Check')

        }
        setLoading(false);
    };

    function conflimSendData() {

        return true;
    }


    // const [entity, setEntity] = useState({
    //     EnrollNumber: 0,
    //     Prefix: "",
    //     Name: "",
    //     SureName: "",
    //     EmployeeCode: "",
    //     Status: 0,
    //     DeptID: 0,
    //     ID: { rowId }
    // })

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
                        onClick={handleSubmit}
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
                        disabled={params.ID !== rowId || loading}
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

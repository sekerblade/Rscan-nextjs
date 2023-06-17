/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'
import { Box, CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';

interface EditEmployeeProps {
    params: {
        id: number; // Update with the correct type
    };
    rowId: number | null; // Update with the correct type
    setRowId: React.Dispatch<React.SetStateAction<number | null>>; // Update with the correct type
}

const EditEmployee: React.FC<EditEmployeeProps> = ({ params, rowId, setRowId }) => {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

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
                        color='primary'
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: green[500],
                            '&:hover': { bgcolor: green[700] }
                        }}
                    >
                        <Check />
                    </Fab>
                ) : (
                    <Fab
                        color='primary'
                        sx={{
                            width: 40,
                            height: 40,

                        }}
                        disabled={params.id !== rowId || loading}
                    >
                        <Save />
                    </Fab>
                )}



            </Box>
        </>
    )
}

export default EditEmployee;

import React from 'react'
import { Box } from '@mui/material'
import TabTime from './tabTime'

export const TimeManagement = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                marginBottom: 2,
            }}>
                <TabTime />
            </Box>
        </>
    )
}

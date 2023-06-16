import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit, Preview } from '@mui/icons-material'


export const RoomsActions = () => {
    return (
        <>
            <Box>
                <Tooltip title="View Detail">
                    <IconButton onClick={() => { }} >
                        <Preview />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit Employee">
                    <IconButton onClick={() => { }} >
                        <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete Employee">
                    <IconButton onClick={() => { }} >
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box>
        </>
    )
}


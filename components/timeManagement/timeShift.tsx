import React from 'react'
import {
    Box,
    Button,
    OutlinedInput,
    Stack,
    TextField,

} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { TimeShiftMid } from './timeShiftMid';


export const TimeShift = () => {
    return (
        <>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',

            }}>
                <Box sx={{//Boxซ้าย
                    border: 1,
                    width: '25%',
                    height: 630,

                }}>
                    <p>รายการหัวข้อ</p>

                    <table border={1}>
                        <tr>
                            <th>รหัสตารางเวลา</th>
                            <th>ชื่อตารางเวลา</th>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>8.00-12.00</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>9.30-16.30</td>
                        </tr>
                    </table>


                </Box>

                <Box sx={{ //ฺBoxขวา
                    border: 1,
                    width: '70%',
                    height: 630,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '7%',
                        flexDirection: 'row',
                        borderRadius: '16px',
                        marginTop: 2,
                        marginLeft: 2,
                    }}>
                        <Stack spacing={1} direction="row" >
                            <Button variant="outlined" size="small" startIcon={<AddCircleIcon />}>
                                Add
                            </Button>
                            <Button variant="outlined" size="small" startIcon={<EditNoteSharpIcon />}>
                                Edit
                            </Button>
                            <Button variant="outlined" size="small" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                            <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                            <Button variant="outlined" size="small" startIcon={<CancelIcon />}>
                                Cancel
                            </Button>
                        </Stack>


                    </Box>

                    <Box sx={{ //กล่องบน
                        width: '100%',
                        height: '23%',

                    }}>
                        <p>ตั้งค่าทั่วไป</p>
                        <Stack spacing={2}>
                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <p>รหัส</p>
                                <input type='text' className='ID' />
                                <p>ชื่อ</p>
                                <input type='text' className='Name' />
                                <p>สถานะ</p>
                                <input type='text' className='Status' />
                            </Stack>
                            <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
                                <p>รหัสทำงาน</p>
                                <input type='text' className='workID' />
                                <p>ชนิดตารางเวลา</p>
                                <input type='text' className='timeType' />

                            </Stack>
                        </Stack>

                    </Box>

                    <Box sx={{  //กล่องกลาง
                        width: '100%',
                        height: '50%',
                        border: '1px solid',
                        borderRadius: '16px'
                    }}>
                        <TimeShiftMid />
                    </Box>

                    <Box sx={{
                        width: '100%',
                        height: '20%',
                        border: '1px solid',
                        borderRadius: '16px'
                    }}>
                        <p>ผลการคำนวณ</p>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

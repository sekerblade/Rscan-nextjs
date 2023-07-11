import React, { useState } from 'react'
import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,

} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const DayShift = () => {

    const [periodOne, setPeriodOne] = useState('')
    const [periodTwo, setPeriodTwo] = useState('')
    const [periodThree, setPeriodThree] = useState('')
    const [periodFour, setPeriodFour] = useState('')

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
            }}>
                <Box sx={{ //Boxซ้าย
                    border: 1,
                    width: '25%',
                    height: 900,
                }}>

                </Box>

                <Box sx={{ //ฺBoxขวา
                    border: 1,
                    width: '70%',
                    height: 900,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{ //ปุ่มบนสุด
                        width: '100%',
                        height: 60,


                        marginTop: 2,
                        marginLeft: 2,
                    }}>
                        <Stack spacing={1} direction="row" >
                            <Button variant="outlined" size="medium" startIcon={<AddCircleIcon />}>
                                Add
                            </Button>
                            <Button variant="outlined" size="medium" startIcon={<EditNoteSharpIcon />}>
                                Edit
                            </Button>
                            <Button variant="outlined" size="medium" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                            <Button variant="outlined" size="medium" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                            <Button variant="outlined" size="medium" startIcon={<CancelIcon />}>
                                Cancel
                            </Button>
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: '100%',
                        height: 150,
                        border: '1px solid',

                    }}>

                        <Typography variant="h6" sx={{ marginLeft: 3, marginTop: 1 }} >ตั้งค่าทั่วไป</Typography>
                        <Box sx={{
                            marginLeft: 4,
                        }}>
                            <Stack spacing={12} direction='row'>
                                <Typography variant="h6">รหัส :</Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"

                                />
                            </Stack>
                            <Stack spacing={13.2} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant="h6">ชื่อ :</Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"

                                />
                            </Stack>
                        </Box>
                    </Box>

                    <Box sx={{
                        width: "100%",
                        height: 350,
                        border: "1px solid",

                    }}>
                        <Typography variant='h6' sx={{ marginLeft: 3, marginTop: 1 }}>ตั้งค่าผวานตารางเวลา</Typography>

                        <Box sx={{
                            marginLeft: 4,
                        }}>
                            <Stack spacing={7} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant='h6' sx={{ width: 140 }}>ช่วงเวลาที่ 1</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={periodOne}
                                        label=""
                                        onChange={(event: SelectChangeEvent) => setPeriodOne(event.target.value)}
                                        size='small'
                                        sx={{ width: 250 }}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack spacing={7} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant='h6' sx={{ width: 140 }}>ช่วงเวลาที่ 2</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={periodTwo}
                                        label=""
                                        onChange={(event: SelectChangeEvent) => setPeriodTwo(event.target.value)}
                                        size='small'
                                        sx={{ width: 250 }}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack spacing={7} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant='h6' sx={{ width: 140 }}>ช่วงเวลาที่ 3</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={periodThree}
                                        label=""
                                        onChange={(event: SelectChangeEvent) => setPeriodThree(event.target.value)}
                                        size='small'
                                        sx={{ width: 250 }}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack spacing={7} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant='h6' sx={{ width: 140 }}>ช่วงเวลาที่ 4</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={periodFour}
                                        label=""
                                        onChange={(event: SelectChangeEvent) => setPeriodFour(event.target.value)}
                                        size='small'
                                        sx={{ width: 250 }}
                                    >
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                            <Stack spacing={7} direction='row' sx={{ marginTop: 2 }}>
                                <Typography variant='h6'>สีพื้นหลัง</Typography>

                            </Stack>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

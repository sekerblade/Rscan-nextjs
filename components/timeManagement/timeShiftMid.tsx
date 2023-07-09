import React, { useState } from 'react'
import {
    Box,
    Grid,
    Paper,
    Button,
    Stack,
    TextField,
    Typography,
    Checkbox,

} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeField } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const TimeShiftMid = () => {
    // Data กล่องบนสุด
    const [valueAttendance, setValueAttendance] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));
    const [valueWorkOut, setValueWorkOut] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [inNum, setInNum] = useState('0');
    const [outNum, setOutNum] = useState('0');

    const handleChangeInNumber = (event: SelectChangeEvent) => {
        setInNum(event.target.value as string);

    }
    const handleChangeOutNumber = (event: SelectChangeEvent) => {
        setOutNum(event.target.value as string);
    }

    //Data กล่องกลาง
    const [startTimeShift1, setStartTimeShift1] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));
    const [endTimeShift1, setEndTimeShift1] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));

    const [startTimeShift2, setStartTimeShift2] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));
    const [endTimeShift2, setEndTimeShift2] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));

    const [inNumFirst, setInNumFirst] = useState('0')//0 +1 -1
    const [outNumFirst, setOutNumFirst] = useState('0')

    const [inNumSecond, setInNumSecond] = useState('0')
    const [outNumSecond, setOutNumSecond] = useState('0')

    const handleChangeInNumberFirst = (event: SelectChangeEvent) => {
        setInNumFirst(event.target.value as string)
    }
    const handleChangeOutNumberFirst = (event: SelectChangeEvent) => {
        setOutNumFirst(event.target.value as string)
    }
    const handleChangeInNumberSecond = (event: SelectChangeEvent) => {
        setInNumSecond(event.target.value as string)
    }
    const handleChangeOutNumberSecond = (event: SelectChangeEvent) => {
        setOutNumSecond(event.target.value as string)
    }

    //Data กล่องล่าง
    const [startTimeShift3, setStartTimeShift3] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));
    const [endTimeShift3, setEndTimeShift3] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));

    const [inNumThird, setInNumThird] = useState('0')//0 +1 -1
    const [outNumThird, setOutNumThird] = useState('0')

    const handleChangeInNumberThird = (event: SelectChangeEvent) => {
        setInNumThird(event.target.value as string)
    }
    const handleChangeOutNumberThird = (event: SelectChangeEvent) => {
        setOutNumThird(event.target.value as string)
    }



    return (
        <>
            <Box sx={{
                width: '100%',

            }}>
                <Box>
                    <Stack spacing={1} direction="row" >
                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 125,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Stack spacing={1} direction="row" sx={{ marginLeft: 2, marginTop: 0 }} >
                                <Typography variant="h6" gutterBottom>
                                    เข้างาน :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={valueAttendance}
                                        onChange={(newValue) => setValueAttendance(newValue)}
                                        format="HH:mm"
                                        size='small'

                                    />
                                </LocalizationProvider>
                            </Stack>

                            <Stack spacing={1} direction="row" sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Checkbox defaultChecked size="medium" sx={{ marginBottom: 10 }} />
                                <Typography variant="h6" gutterBottom sx={{ width: 250 }}>
                                    ต้องลงเวลาเข้า :
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={inNum}
                                        label="0"
                                        onChange={handleChangeInNumber}
                                        size='small'
                                        sx={{ width: 150 }}
                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>



                        </Box>
                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 125,
                        }}>
                            <Stack spacing={1} direction="row" sx={{ marginLeft: 2, marginTop: 0 }} >
                                <Typography variant="h6" gutterBottom>
                                    ออกงาน :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={valueWorkOut}
                                        onChange={(newValue) => setValueWorkOut(newValue)}
                                        format="HH:mm"
                                        size='small'

                                    />
                                </LocalizationProvider>
                            </Stack>

                            <Stack spacing={1} direction="row" sx={{ marginLeft: 2, marginTop: 2 }}>
                                <Checkbox defaultChecked size="medium" sx={{ marginBottom: 10 }} />
                                <Typography variant="h6" gutterBottom sx={{ width: 250 }}>
                                    ต้องลงเวลาออก :
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNum}
                                        label="0"
                                        onChange={handleChangeOutNumber}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>



                <Box>
                    <Stack spacing={1} direction="row" >
                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 145,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Stack spacing={1} direction="row" >
                                <Typography variant='h6' sx={{ marginRight: 8, marginLeft: 2 }} >ถือเป็นเวลาเข้างาน</Typography>
                                <Checkbox defaultChecked size="medium" />
                                <Typography variant='h6' >เก็บข้อมูลท้าย</Typography>
                            </Stack>

                            <Stack spacing={3.7} direction="row" sx={{ marginLeft: 2, marginTop: 0 }} >
                                <Typography variant="h6" gutterBottom>
                                    เริ่มต้น :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={startTimeShift1}
                                        onChange={(newValue) => setStartTimeShift1(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                                <Typography variant="h6" gutterBottom >
                                    สิ้นสุด :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={endTimeShift1}
                                        onChange={(newValue) => setEndTimeShift1(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                            </Stack>

                            <Stack spacing={1} direction="row" sx={{ marginLeft: 12, marginTop: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={inNumFirst}
                                        label="0"
                                        onChange={handleChangeInNumberFirst}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumFirst}
                                        label="0"
                                        onChange={handleChangeOutNumberFirst}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                        </Box>



                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 145,
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Stack spacing={1} direction="row" >
                                <Typography variant='h6' sx={{ marginRight: 8, marginLeft: 2 }} >ถือเป็นเวลาออกงาน</Typography>
                                <Checkbox defaultChecked size="medium" />
                                <Typography variant='h6' >เก็บข้อมูลแรกสุด</Typography>
                            </Stack>

                            <Stack spacing={3.7} direction="row" sx={{ marginLeft: 2, marginTop: 0 }} >
                                <Typography variant="h6" gutterBottom>
                                    เริ่มต้น :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={startTimeShift2}
                                        onChange={(newValue) => setStartTimeShift2(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                                <Typography variant="h6" gutterBottom >
                                    สิ้นสุด :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={endTimeShift2}
                                        onChange={(newValue) => setEndTimeShift2(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                            </Stack>

                            <Stack spacing={1} direction="row" sx={{ marginLeft: 12, marginTop: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={inNumSecond}
                                        label="0"
                                        onChange={handleChangeInNumberSecond}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumSecond}
                                        label="0"
                                        onChange={handleChangeOutNumberSecond}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>

                        </Box>
                    </Stack>
                </Box>


                <Box>
                    <Stack spacing={1} direction="row" >
                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 150,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Stack spacing={1} direction="row" >
                                <Checkbox defaultChecked size="medium" />
                                <Typography variant="h6" gutterBottom>
                                    หยุดพักกลางวันและเย็น
                                </Typography>
                            </Stack>


                            <Stack spacing={3.7} direction="row" sx={{ marginLeft: 2, marginTop: 0 }} >
                                <Typography variant="h6" gutterBottom>
                                    เริ่มต้น :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={startTimeShift3}
                                        onChange={(newValue) => setStartTimeShift3(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                                <Typography variant="h6" gutterBottom >
                                    สิ้นสุด :
                                </Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <TimeField
                                        value={endTimeShift3}
                                        onChange={(newValue) => setEndTimeShift3(newValue)}
                                        format="HH:mm"
                                        size='small'
                                        sx={{ width: 120 }}
                                    />
                                </LocalizationProvider>
                            </Stack>

                            <Stack spacing={1} direction="row" sx={{ marginLeft: 12, marginTop: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={inNumThird}
                                        label="0"
                                        onChange={handleChangeInNumberThird}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumThird}
                                        label="0"
                                        onChange={handleChangeOutNumberThird}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>



                        </Box>
                        <Box sx={{
                            width: '50%',
                            border: '1px solid ',
                            height: 150,
                        }}>

                        </Box>
                    </Stack>
                </Box>

            </Box>
        </>
    )
}

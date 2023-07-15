import React, { useContext, useState } from 'react'
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeField } from '@mui/x-date-pickers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { topReducer, timeTableData } from './formReducer';


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

    const [lateType, setLateType] = useState('')//สายแบบไหน? ไทย || ต่างชาติ

    const [breakTime, setBreakTime] = useState(0)//เวลาพักเบรค

    const [canLate, setCanLate] = useState(0)//สามารถเข้า Late ได้กี่นาที
    const [leaveEarly, setLeaveEarly] = useState(0)//สามารถออก Early ได้กี่นาที

    const handleChangeInNumberThird = (event: SelectChangeEvent) => {
        setInNumThird(event.target.value as string)
    }
    const handleChangeOutNumberThird = (event: SelectChangeEvent) => {
        setOutNumThird(event.target.value as string)
    }

    const handleChangeLateType = (event: SelectChangeEvent) => {
        setLateType(event.target.value as string)
    }

    //Data กล่องฐาน
    const [period, setPeriod] = useState('ช่วงเวลาทำงาน')

    const [calDay, setCalDay] = useState("1.0")

    const handleChangePeriod = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string)
    }

    const exNum = [
        {
            num: "+1"
        },
        {
            num: "0"
        },
        {
            num: "-1"
        },
    ]

    const late = [
        {
            name: "แบบไทย",
            id: 0
        },
        {
            name: "แบบต่างชาติ",
            id: 1
        }
    ]

    const midData = {
        valueAttendance: valueAttendance,
        valueWorkOut: valueWorkOut,
        inNum: inNum,
        outNum: outNum,
        startTimeShift1: startTimeShift1,
        endTimeShift1: endTimeShift1,
        startTimeShift2: startTimeShift2,
        endTimeShift2: endTimeShift2,
        inNumFirst: inNumFirst,
        outNumFirst: outNumFirst,
        inNumSecond: inNumSecond,
        outNumSecond: outNumSecond,
        startTimeShift3: startTimeShift3,
        endTimeShift3: endTimeShift3,
        inNumThird: inNumThird,
        outNumThird: outNumThird,
        lateType: lateType,
        breakTime: breakTime,
        canLate: canLate,
        leaveEarly: leaveEarly,
        period: period,
        calDay: calDay,
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
                                <Typography variant="h6" gutterBottom sx={{ width: 250, paddingTop: 0.5 }}>
                                    ต้องลงเวลาเข้า :
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={inNum}
                                        label=""
                                        onChange={handleChangeInNumber}
                                        size='small'
                                        sx={{ width: 150 }}
                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
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
                                <Typography variant="h6" gutterBottom sx={{ width: 250, paddingTop: 0.5 }}>
                                    ต้องลงเวลาออก :
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNum}
                                        label=""
                                        onChange={handleChangeOutNumber}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}

                                        {/* <MenuItem value={-1}>-1</MenuItem>
                                        <MenuItem value={0}>0</MenuItem>
                                        <MenuItem value={+1}>+1</MenuItem> */}
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
                                <Typography variant='h6' sx={{ paddingTop: 0.5 }} >เก็บข้อมูลท้าย</Typography>
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
                                        label=""
                                        onChange={handleChangeInNumberFirst}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumFirst}
                                        label=""
                                        onChange={handleChangeOutNumberFirst}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
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
                                <Typography variant='h6' sx={{ paddingTop: 0.5 }} >เก็บข้อมูลแรกสุด</Typography>
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
                                        label=""
                                        onChange={handleChangeInNumberSecond}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumSecond}
                                        label=""
                                        onChange={handleChangeOutNumberSecond}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Stack>

                        </Box>
                    </Stack>
                </Box>


                <Box sx={{

                }}>
                    <Stack spacing={1} direction="row" >
                        <Box sx={{ //ซ้าย
                            width: '50%',
                            border: '1px solid ',
                            height: 190,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <Stack spacing={1} direction="row" >
                                <Checkbox defaultChecked size="medium" />
                                <Typography variant="h6" gutterBottom sx={{ paddingTop: 0.5 }}>
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
                                        label=""
                                        onChange={handleChangeInNumberThird}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={outNumThird}
                                        label=""
                                        onChange={handleChangeOutNumberThird}
                                        size='small'
                                        sx={{ width: 150 }}

                                    >
                                        {exNum.map((id) => {
                                            return <MenuItem key={id.num} value={id.num}>{id.num}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack spacing={7} direction="row" sx={{ marginLeft: 1, marginTop: 1 }}>
                                <Stack spacing={1} direction="row">
                                    <Checkbox defaultChecked size="medium" />
                                    <Typography variant="h6" sx={{ paddingTop: 0.5 }} >มีช่วงเวลาพัก</Typography>
                                </Stack>
                                <Stack spacing={1} direction="row">
                                    <TextField
                                        id="outlined-basic"
                                        label=""
                                        variant="outlined"
                                        value={breakTime}
                                        size='small'
                                        sx={{ width: 120, paddingRight: 1 }}
                                    />
                                    <Typography variant="h6">นาที</Typography>
                                </Stack>

                            </Stack>



                        </Box>
                        <Box sx={{//ขวา
                            width: '50%',
                            border: '1px solid ',
                            height: 190,

                        }}>
                            <Stack direction="row" sx={{ marginLeft: 2 }}>
                                <Typography variant="h6" >เงื่อนไข</Typography>
                            </Stack>
                            <Stack spacing={1} direction="row" sx={{ marginLeft: 3 }}>
                                <Typography variant="h6" sx={{ width: 250 }} >ชนิดอนุโลมมาสาย</Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={lateType}
                                        label=""
                                        onChange={handleChangeLateType}
                                        size='small'
                                        sx={{ width: 150 }}
                                    >
                                        {late.map((late) => {
                                            return <MenuItem key={late.id} value={late.name}>{late.name}</MenuItem>
                                        })}

                                        {/* <MenuItem value={"แบบไทย"}>แบบไทย</MenuItem>
                                        <MenuItem value={"แบบต่างชาติ"}>แบบต่างชาติ</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack spacing={1} direction="row" sx={{ marginLeft: 6 }}>
                                <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
                                    <Typography variant='h6' sx={{ width: 150 }}>มาสายได้</Typography>
                                    <TextField
                                        id="outlined-basic"
                                        label=""
                                        variant="outlined"
                                        value={canLate}
                                        size='small'
                                        sx={{ width: 120, paddingRight: 1 }}
                                    />
                                    <Typography variant='h6'> นาที</Typography>
                                </Stack>
                            </Stack>
                            <Stack spacing={1} direction="row" sx={{ marginLeft: 6 }}>
                                <Stack spacing={1} direction="row" sx={{ marginTop: 1 }}>
                                    <Typography variant='h6' sx={{ width: 150 }}>ออกก่อนได้</Typography>
                                    <TextField
                                        id="outlined-basic"
                                        label=""
                                        variant="outlined"
                                        value={leaveEarly}
                                        size='small'
                                        sx={{ width: 120, paddingRight: 1 }}
                                    />
                                    <Typography variant='h6'> นาที</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>


                <Box sx={{//กล่องฐาน
                    width: '100%',
                    height: 80,
                    border: '1px solid ',

                }}>
                    <Typography variant="h6" sx={{ marginLeft: 2 }}>สถานะตารางเวลา</Typography>
                    <Stack spacing={25} direction="row" >
                        <Stack spacing={1} direction="row" sx={{ marginLeft: 3 }}>

                            <FormControl>
                                <InputLabel id="demo-simple-select-label"></InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={period}
                                    label=""
                                    onChange={handleChangePeriod}
                                    size='small'
                                    sx={{ width: 150 }}
                                >
                                    <MenuItem value={"ช่วงเวลาทำงาน"}>ช่วงเวลาทำงาน</MenuItem>

                                </Select>
                            </FormControl>
                            <Checkbox size="medium" sx={{ paddingLeft: 4 }} />
                            <Typography variant="h6" sx={{ paddingTop: 0.5 }}>โอทีไม่จำกัด</Typography>

                        </Stack>
                        <Stack spacing={2} direction="row">
                            <Typography variant="h6" sx={{ paddingTop: 0.5 }} >ผลคำนวณนับเป็น</Typography>
                            <TextField
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                value={calDay}
                                onChange={({ target }) => setCalDay(target?.value)}
                                size='small'
                                sx={{ width: 100, paddingRight: 1 }}
                            />
                            <Typography variant="h6" sx={{ paddingTop: 0.5 }}>วัน</Typography>
                        </Stack>
                    </Stack>


                </Box>
            </Box>
        </>
    )
}
    // const context = useContext(DataContext);
    // const {
    //     code,
    //     status,
    //     scheduleType,
    //     periodTop,
    //     workCode,
    //     valueAttendance,
    //     valueWorkOut,
    //     inNum,
    //     outNum,
    //     startTimeShift1,
    //     endTimeShift1,
    //     startTimeShift2,
    //     endTimeShift2,
    //     inNumFirst,
    //     outNumFirst,
    //     inNumSecond,
    //     outNumSecond,
    //     startTimeShift3,
    //     endTimeShift3,
    //     inNumThird,
    //     outNumThird,
    //     lateType,
    //     breakTime,
    //     canLate,
    //     leaveEarly,
    //     period,
    //     calDay,
    // } = context;
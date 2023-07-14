import React, { createContext, useContext, useState, useReducer } from 'react'
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
import { TimeShiftMid } from './timeShiftMid';
import { TimeShiftBottom } from './timeShiftBottom';
import { TimeTableData } from '../../types/timeTableDataType';

function reducer(state: any, action: any) {


    return state;
}

const timeTableData: TimeTableData | any = {
    code: '',
    status: '',
    scheduleType: '',
    periodTop: '',
    workCode: '',
    valueAttendance: '',
    valueWorkOut: '',
    inNum: '',
    outNum: '',
    startTimeShift1: '',
    endTimeShift1: '',
    startTimeShift2: '',
    endTimeShift2: '',
    inNumFirst: '',
    outNumFirst: '',
    inNumSecond: '',
    outNumSecond: '',
    startTimeShift3: '',
    endTimeShift3: '',
    inNumThird: '',
    outNumThird: '',
    lateType: '',
    breakTime: '',
    canLate: '',
    leaveEarly: '',
    period: '',
    calDay: '',
}

const DataContext = createContext(timeTableData);

export const TimeShift = () => {

    const [state, dispatch] = useReducer(reducer, timeTableData);


    const [code, setCode] = useState('')
    const [status, setStatus] = useState('')
    const [scheduleType, setScheduleType] = useState('')
    const [periodTop, setPeriodTop] = useState('')
    const [workCode, setWorkCode] = useState('')

    return (
        <>
            <DataContext.Provider value={{ state, dispatch }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',

                }}>
                    <Box sx={{//Boxซ้าย
                        border: 1,
                        width: '25%',
                        height: 900,

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

                        <Box sx={{ //กล่องบน
                            width: '100%',
                            height: 145,
                            marginLeft: 3,

                        }}>
                            <p>ตั้งค่าทั่วไป</p>

                            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                                <Typography variant="h6" gutterBottom>
                                    รหัส :
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"
                                    value={code}
                                />
                                <Typography variant="h6" gutterBottom>
                                    สถานะ :
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"
                                    value={status}
                                />
                                <Typography variant="h6" gutterBottom>
                                    ชนิดตารางเวลา :
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"
                                    value={scheduleType}
                                />
                            </Stack>
                            <br />
                            <Stack spacing={1} direction="row" useFlexGap flexWrap="wrap">
                                <Typography variant="h6" gutterBottom>
                                    ช่วงเวลา :
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"
                                    value={periodTop}
                                />
                                <Typography variant="h6" gutterBottom>
                                    รหัสทำงาน :
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    size="small"
                                    value={workCode}
                                />
                            </Stack>



                        </Box>

                        <Box sx={{  //กล่องกลาง
                            width: '100%',
                            height: 550,
                            marginTop: 2
                        }}>
                            <TimeShiftMid />
                        </Box>

                        <Box sx={{ //กล่องล่าง
                            width: '100%',
                            height: '20%',
                        }}>
                            <TimeShiftBottom />
                        </Box>

                    </Box>
                </Box>
            </DataContext.Provider>

        </>
    )
}
export { DataContext }
/*{
                code: state.code,
                status: state.status,
                scheduleType: state.scheduleType,
                periodTop: state.periodTop,
                workCode: state.workCode,
                valueAttendance: state.valueAttendance,
                valueWorkOut: state.valueWorkOut,
                inNum: state.inNum,
                outNum: state.outNum,
                startTimeShift1: state.startTimeShift1,
                endTimeShift1: state.endTimeShift1,
                startTimeShift2: state.startTimeShift2,
                endTimeShift2: state.endTimeShift2,
                inNumFirst: state.inNumFirst,
                outNumFirst: state.outNumFirst,
                inNumSecond: state.inNumSecond,
                outNumSecond: state.outNumSecond,
                startTimeShift3: state.startTimeShift3,
                endTimeShift3: state.endTimeShift3,
                inNumThird: state.inNumThird,
                outNumThird: state.outNumThird,
                lateType: state.lateType,
                breakTime: state.breakTime,
                canLate: state.canLate,
                leaveEarly: state.leaveEarly,
                period: state.period,
                calDay: state.calDay,
            } */
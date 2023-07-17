import dayjs from "dayjs"
import {TimeTableData} from "../../types/timeTableDataType"

export const timeTableData : TimeTableData= { //initial
    code: '',
    status: '',
    scheduleType: '',
    periodTop: '',
    workCode: '',
    valueAttendance: '00:00',
    valueWorkOut: '00:00',
    inNum: '',
    outNum: '',
    startTimeShift1: '00:00',
    endTimeShift1: '00:00',
    startTimeShift2: '00:00',
    endTimeShift2: '00:00',
    inNumFirst: '',
    outNumFirst: '',
    inNumSecond: '',
    outNumSecond: '',
    startTimeShift3: '00:00',
    endTimeShift3: '00:00',
    inNumThird: '',
    outNumThird: '',
    lateType: '',
    breakTime: '',
    canLate: '',
    leaveEarly: '',
    period: '',
    calDay: '',
    textOne: '',
    textTwo: '',
    textThree: '',
}

export const topReducer =(state: any, action: any) =>{
    switch (action.type) {
        case 'changeTop':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'changeMid':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }   
        case 'changeBottom':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            } 
        case 'changetime':
            return {
                ...state,
                [action.payload.id]: action.payload.value
            }
        }
}

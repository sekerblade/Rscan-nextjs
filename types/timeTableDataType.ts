import dayjs, { Dayjs } from 'dayjs';

export type TimeTableData = {
    code: string;
    status: string;
    scheduleType: string;
    periodTop: string;
    workCode: string;
    valueAttendance: string;
    valueWorkOut: string;
    inNum: string;
    outNum: string;
    startTimeShift1: string;
    endTimeShift1: string;
    startTimeShift2: string;
    endTimeShift2: string;
    inNumFirst: string;
    outNumFirst: string;
    inNumSecond: string;
    outNumSecond: string;
    startTimeShift3: string;
    endTimeShift3: string;
    inNumThird: string;
    outNumThird: string;
    lateType: string;
    breakTime: number|string;
    canLate: number|string;
    leaveEarly: number|string;
    period: string;
    calDay: string;
    textOne: string;
    textTwo: string;
    textThree: string;
}
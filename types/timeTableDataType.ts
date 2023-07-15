import dayjs, { Dayjs } from 'dayjs';

export type TimeTableData = {
    code: string;
    status: string;
    scheduleType: string;
    periodTop: string;
    workCode: string;
    valueAttendance: Dayjs| null;
    valueWorkOut: Dayjs| null;
    inNum: string;
    outNum: string;
    startTimeShift1: Dayjs| null;
    endTimeShift1: Dayjs| null;
    startTimeShift2: Dayjs| null;
    endTimeShift2: Dayjs| null;
    inNumFirst: string;
    outNumFirst: string;
    inNumSecond: string;
    outNumSecond: string;
    startTimeShift3: Dayjs| null;
    endTimeShift3: Dayjs| null;
    inNumThird: string;
    outNumThird: string;
    lateType: string;
    breakTime: number;
    canLate: number;
    leaveEarly: number;
    period: string;
    calDay: string;
}
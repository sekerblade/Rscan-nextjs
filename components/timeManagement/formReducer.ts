export const timeTableData : any = { //initial
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

export const topReducer =(state: any, action: any) =>{
    switch (action.type) {
        case 'changeTop':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'changeMid':
            return {

            }    

    }
    return state
}

import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const {
                code,
                status,
                scheduleType,
                periodTop,
                workCode,
                valueAttendance,
                valueWorkOut,
                inNum,
                outNum,
                startTimeShift1,
                endTimeShift1,
                startTimeShift2,
                endTimeShift2,
                inNumFirst,
                outNumFirst,
                inNumSecond,
                outNumSecond,
                startTimeShift3,
                endTimeShift3,
                inNumThird,
                outNumThird,
                lateType,
                canLate,
                leaveEarly,
                period,
                textOne,
                textTwo,
                textThree,
                breakTime,
                calDay,
            } = req.body;
            console.log(req.body);
            console.log("Check")
            // Perform the INSERT query
            const result = await query(
                'INSERT INTO TimeShift (code,status,scheduletype,periodtop,workcode,valueattendance,valueworkout,innum,outnum,starttimeshift1,endtimeshift1,starttimeshift2,endtimeshift2,innumfirst,outnumfirst,innumsecond,outnumsecond,starttimeshift3,endtimeshift3,innumthird,outnumthird,latetype,canlate,leaveearly,period,textone,texttwo,textthree,breaktime,calday) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                code,
                status,
                scheduleType,
                periodTop,
                workCode,
                valueAttendance,
                valueWorkOut,
                inNum,
                outNum,
                startTimeShift1,
                endTimeShift1,
                startTimeShift2,
                endTimeShift2,
                inNumFirst,
                outNumFirst,
                inNumSecond,
                outNumSecond,
                startTimeShift3,
                endTimeShift3,
                inNumThird,
                outNumThird,
                lateType,
                canLate,
                leaveEarly,
                period,
                textOne,
                textTwo,
                textThree,
                breakTime,
                calDay,
                ]
            );

            // Return success response
            res.status(200).json({ message: 'Data inserted successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'An error occurred' });
        }
    } else {
        // Return error for unsupported HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {

            const { EnrollNumber, Prefix, Name, SureName, EmployeeCode, Status, DeptID, ID } = req.body;
            console.log(req.body);
            // Perform the INSERT query
            const result = await query(
                'UPDATE Emp_Info SET EnrollNumber = ?,Prefix = ?,Name = ?,SureName = ?,EmployeeCode = ?,Status = ?,DeptID = ? WHERE ID = ?',
                [EnrollNumber, Prefix, Name, SureName, EmployeeCode, Status, DeptID, ID]

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
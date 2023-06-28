import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            console.log(data)
            // Loop through each row of data and execute the INSERT query or UPDATE query
            for (const row of data) {
                try {
                    await query(
                        'INSERT INTO Emp_Info (EnrollNumber, Prefix, Name, SureName, EmployeeCode, Status, DeptID) VALUES (?, ?, ?, ?, ?, ?, ?)',
                        [
                            row.EnrollNumber,
                            row.Prefix,
                            row.Name,
                            row.SureName,
                            row.EmployeeCode,
                            row.Status,
                            row.DeptID,
                        ]
                    );
                } catch (error: any) {
                    //console.log(error)
                    // Handle unique index constraint violation
                    if (error.code === 'ER_DUP_ENTRY') {
                        await query(
                            'UPDATE Emp_Info SET EnrollNumber = ?, Prefix = ?, EmployeeCode = ?, Status = ?, DeptID = ? WHERE Name = ? AND SureName = ?',
                            [
                                row.EnrollNumber,
                                row.Prefix,
                                row.EmployeeCode,
                                row.Status,
                                row.DeptID,
                                row.Name,
                                row.SureName,
                            ]
                        );
                    } else {
                        // Handle other errors
                        throw error;
                    }
                }
            }

            // Return success response
            res.status(200).json({ message: 'Data inserted/updated successfully' });
        } catch (error: any) {
            console.error('Error:', error);
            res.status(500).json({ message: 'An error occurred' });
        }
    } else {
        // Return error for unsupported HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

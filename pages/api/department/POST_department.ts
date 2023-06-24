import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { DeptName, DeptParent, DeptLevel, emp_id } = req.body;

            // Perform the INSERT query
            const result = await query(
                'INSERT INTO Emp_Dept (DeptName, DeptParent, DeptLevel, emp_id) VALUES (?, ?, ?, ?)',
                [DeptName, DeptParent, DeptLevel, emp_id]
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
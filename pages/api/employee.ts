import { query } from '../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function employeesHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Execute the query to fetch the "employees" table data
        const employees = await query('SELECT * FROM Emp_Info');

        // Return the retrieved data as the response

        res.status(200).json(employees);
    } catch (error) {
        console.error('Error retrieving employees:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function searchEmployee(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { ID, dateStart, dateEnd } = req.body;
        console.log(req.body)
        // Execute the database query
        const results = await query(
            `SELECT * FROM Emp_Records WHERE ID = ? AND (DateTimeLog BETWEEN ? AND ?)`,
            [ID, dateStart, dateEnd]
        );

        // Return the query results as the API response
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

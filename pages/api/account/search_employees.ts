import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function searchEmployee(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { selectedEmployeeIds, dateStart, dateEnd } = req.body;

        // Initialize an empty array to store the results
        const results = [];

        // Loop through the selectedEmployeeIds
        for (const employeeId of selectedEmployeeIds) {
            // Execute the database query for each employeeId and corresponding dateStart and dateEnd
            const queryResult = await query(
                `SELECT * FROM Emp_Records WHERE ID = ? AND DateTimeLog >= ? AND DateTimeLog <= ?`,
                [employeeId, dateStart, dateEnd]
            );

            // Append the query result to the results array
            results.push(queryResult);
        }

        console.log(results)
        // Return the query results as the API response
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

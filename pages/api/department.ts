import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

export default async function departmentHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Execute the query to retrieve department data
    const departments = await query('SELECT * FROM Emp_Dept');

    // Return the department data as the API response
    res.status(200).json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
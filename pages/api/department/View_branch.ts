import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

export default async function ViewHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Execute the query to retrieve department data
    const branches = await query('SELECT * FROM view_branches_have_departments');

    // Return the department data as the API response
    res.status(200).json(branches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
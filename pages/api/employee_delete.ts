import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const { employeeId } = req.body;

    try {
        // Execute the delete query
        await query('DELETE FROM Emp_Info WHERE ID = ?', [employeeId]);

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

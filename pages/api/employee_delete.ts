import { query } from '../../lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function employeesDelete(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        
        const {userId} = req.query;
        const employees = await query('DELETE FROM Emp_Info WHERE ID = [userId];');

        

        res.status(200).json({sucess : true});
    } catch (error) {
        console.error('Error retrieving employees:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
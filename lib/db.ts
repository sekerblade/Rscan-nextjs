import mysql, { Pool, PoolConnection, FieldPacket, RowDataPacket } from 'mysql2/promise';

// Create a connection pool
const pool: Pool = mysql.createPool({
    host: 'ns13.hostinglotus.net',
    user: 'adgcoth_root',
    password: 'Pa$$w0rd',
    database: 'adgcoth_001',
    port: 3306,
    connectionLimit: 10,
});

// Export a function to execute database queries
export async function query(sql: string, values?: any[]): Promise<RowDataPacket[]> {
    let connection: PoolConnection | undefined;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query<RowDataPacket[]>(sql, values);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
}

import mysql, { Connection, Pool, QueryError, RowDataPacket, OkPacket, ResultSetHeader, FieldPacket } from 'mysql2';

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
export function query(sql: string, values?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error: QueryError | null, results: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, fields: FieldPacket[]) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

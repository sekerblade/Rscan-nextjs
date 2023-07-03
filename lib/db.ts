import mysql, { Pool, QueryError, RowDataPacket, OkPacket, ResultSetHeader, FieldPacket, PoolConnection } from 'mysql2';

// Create a connection pool
const pool: Pool = mysql.createPool({
    host: 'ns13.hostinglotus.net',
    user: 'adgcoth_root',
    password: 'Pa$$w0rd',
    database: 'adgcoth_001',
    port: 3306,
    connectionLimit: 20, // Increase the connection limit if necessary
});

// Export a function to execute database queries
export function query(sql: string, values?: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
        pool.getConnection((err: NodeJS.ErrnoException | null, connection: PoolConnection) => {
            if (err) {
                reject(err);
                return;
            }

            connection.query(sql, values, (error: QueryError | null, results: RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, fields: FieldPacket[]) => {
                connection.release(); // Release the connection after executing the query
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        pool.end;
    });
}

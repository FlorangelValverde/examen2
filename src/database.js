import { Pool } from 'pg'

export const pool = new Pool({
    host: 'ec2-54-166-242-77.compute-1.amazonaws.com',
    user: 'kpjvdowxmkwyag',
    password: '3f4fd6fe81496c0e6514b96042f9a0a04e5ee394e119fc0a7af9646d9cdadba7',
    database: 'd659hsrfv2b1j2',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});
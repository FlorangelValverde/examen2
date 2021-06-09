import { pool } from '../database'
const helpers = require('../libs/helpers');


//LISTAR
export const readAllUsuario = async(req, res) => {
    try {
        const response = await pool.query('select u.idusuario, e.nombres, u.username, u.password, u.estado, r.nomrol from usuario u, empleado e, rol r where u.idempleado= e.idempleado and u.idrol=r.idrol');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//CREAR
export const createUsuario = async(req, res) => {
    try {
        const { idusuario, idempleado, username, password, estado, idrol} = req.body;
        const pass = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(idusuario, idempleado, username, password, estado, idrol) values($1, $2, $3, $4, $5, $6)', [idusuario, idempleado, username, pass, estado, idrol]);

        return res.status(200).json(
            `Usuario ${ username } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
import { pool } from '../database'
const helpers = require('../libs/helpers');


//LISTAR
export const readAllVenta = async(req, res) => {
    try {
        const response = await pool.query('select v.idventa, c.nombres as cliente, e.nombres as empleado, u.username , v.fecha, v.tipodoc, v.numdoc from venta v, cliente c, usuario u, empleado e where v.idcliente=c.idcliente and v.idusuario=u.idusuario and v.idempleado=e.idempleado');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//BUSCAR
export const readVenta= async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select v.idventa, c.nombres as cliente, e.nombres as empleado, u.username , v.fecha, v.tipodoc, v.numdoc from venta v, cliente c, usuario u, empleado e where v.idcliente=c.idcliente and v.idusuario=u.idusuario and v.idempleado=e.idempleado and v.idventa = $1;', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//ELIMINAR
export const deleteVenta = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from venta where idventa=$1', [id]);

        return res.status(200).json(
            `Venta ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//ACTUALIZAR
export const updateVenta = async(req, res) => {
    try {
        const idventa = parseInt(req.params.id);
        const { fecha, tipodoc, numdoc, idcliente, idusuario, idempleado} = req.body;
        await pool.query('update venta set fecha=$1, tipodoc=$2, numdoc=$3, idcliente= $4, idusuario= $5, idempleado=$6 where idventa=$7', [fecha, tipodoc, numdoc, idcliente, idusuario, idempleado, idventa]);

        return res.status(200).json(
            `Venta ${ idventa } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//CREAR
export const createVenta = async(req, res) => {
    try {
        const {idventa, fecha, tipodoc, numdoc, idcliente, idusuario, idempleado } = req.body;
        await pool.query('insert into venta(idventa, fecha, tipodoc, numdoc, idcliente, idusuario, idempleado) values($1, $2, $3, $4, $5, $6, $7)', [idventa, fecha, tipodoc, numdoc, idcliente, idusuario, idempleado ]);

        return res.status(200).json(
            `Venta ${ idventa } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
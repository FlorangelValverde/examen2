import { pool } from '../database'
const helpers = require('../libs/helpers');


//LISTAR
export const readAllDetalle = async(req, res) => {
    try {
        const response = await pool.query('select d.iddetalle, p.nomprod, d.cantidad, v.fecha from detalle d, producto p, venta v where d.idproducto = p.idproducto and d.idventa = v.idventa');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//BUSCAR
export const readDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select d.iddetalle, p.nomprod, d.cantidad, v.fecha from detalle d, producto p, venta v where d.idproducto = p.idproducto and d.idventa = v.idventa and d.iddetalle = $1;', [id]);

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//ELIMINAR
export const deleteDetalle = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle=$1', [id]);

        return res.status(200).json(
            `Detalle ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//ACTUALIZAR
export const updateDetalle = async(req, res) => {
    try {
        const iddetalle = parseInt(req.params.id);
        const { precio, cantidad, idproducto, idventa } = req.body;
        await pool.query('update detalle set precio=$1, cantidad=$2, idproducto= $3, idventa= $4 where iddetalle=$5', [precio, cantidad, idproducto, idventa, iddetalle]);

        return res.status(200).json(
            `Detalle ${ iddetalle } se ha actualizado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}

//CREAR
export const createDetalle = async(req, res) => {
    try {
        const {iddetalle ,precio, cantidad, idproducto, idventa } = req.body;
        await pool.query('insert into detalle(iddetalle, precio, cantidad, idproducto, idventa) values($1, $2, $3, $4, $5)', [iddetalle, precio, cantidad, idproducto, idventa]);

        return res.status(200).json(
            `Detalle ${ iddetalle } se ha creado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
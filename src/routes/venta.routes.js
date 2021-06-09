import { Router } from 'express'

const router = Router();

import * as ventaCtr from '../controllers/ventas_controller'
const { checkToken } = require('../auth/token_validation');



router.get('/',checkToken,ventaCtr.readAllVenta);
router.get('/venta/:id',checkToken, ventaCtr.readVenta);
router.delete('/venta/:id', ventaCtr.deleteVenta);
router.put('/venta/:id', ventaCtr.updateVenta);
router.post('/venta/', ventaCtr.createVenta);


export default router;
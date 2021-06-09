import { Router } from 'express'

const router = Router();

import * as detalleCtr from '../controllers/detalle_controller'
const { checkToken } = require('../auth/token_validation');


router.get('/',checkToken,detalleCtr.readAllDetalle);
router.get('/:id',checkToken, detalleCtr.readDetalle);
router.delete('/:id', detalleCtr.deleteDetalle);
router.put('/:id', detalleCtr.updateDetalle);
router.post('/', detalleCtr.createDetalle);


export default router;
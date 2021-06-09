import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/usuario_controller';
const { checkToken } = require('../auth/token_validation');


router.get('/user/',checkToken,userCtr.readAllUsuario);
router.post('/user/', userCtr.createUsuario);

export default router;
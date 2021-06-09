
import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/tienda.routes'
import detalleRoutes from './routes/detalle.routes'
import ventaRoutes from './routes/venta.routes'
import authRoutes from './routes/auth.routes'

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('SERVIDOR NODE JS CORRIENDO CORRECTAMENTE...!');
});

app.use('/api/auth', authRoutes);
app.use('/api/auth/user', userRoutes);
app.use('/api/auth/venta', ventaRoutes);
app.use('/api/auth/detalle', detalleRoutes);

export default app;
import express from 'express';
import morgan from 'morgan';
import mediaRoutes from './routes/media.routes' ;
// a cors no le dio la gana de pinchar con el import 
import authRoutes from './routes/auth.routes'
var cors = require('cors')
const app = express();
app.use(express.static('public'))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())
app.use(mediaRoutes)
app.use(authRoutes)
export default app
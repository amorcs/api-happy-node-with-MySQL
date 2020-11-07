import { Router} from 'express';
import OrphanageController from './controllers/OrphanageController';
import uploadConfig from './config/uploads';
import multer from 'multer';

const routes = Router();
const upload = multer(uploadConfig);
routes.post('/orphanages',upload.array('images'), OrphanageController.create)
routes.get('/orphanages',OrphanageController.index);
routes.get('/orphanages/:id',OrphanageController.show);


export default routes;

import { Router } from 'express';

import { Logger } from '@middlewares/Logger';
import { AppController } from '@controllers/AppController';

const routes = Router();

routes.use(Logger); // Logger middleware

routes.get('/', AppController.handle);

export { routes };

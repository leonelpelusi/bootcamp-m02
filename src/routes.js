import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionControler from './app/controller/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);

export default routes;

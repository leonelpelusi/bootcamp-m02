import { Router } from 'express';
import User from './app/model/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Leo',
    email: 'leo@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;

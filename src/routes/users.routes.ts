import { Router, Request, Response } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUsersService';

const usersRouter = Router();

usersRouter.get('/', ensureAuthenticated, async (request: Request, response: Response) => {
  const listUser = new ListUserService();

  const users = await listUser.execute();

  return response.json(users);
})
usersRouter.post('/', async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  // @ts-expect-error
  delete user.password;

  return response.json(user);
});

export default usersRouter;

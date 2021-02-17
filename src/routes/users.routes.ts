import { Router, Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  // @ts-expect-error
  delete user.password;

  return response.json(user);
});

export default usersRouter;

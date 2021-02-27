import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUsersService';

export default class UsersController {
  async show(request: Request, response: Response) {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    // @ts-expect-error
    delete user.password;

    return response.json(user);
  }
}

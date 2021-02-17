
import { getRepository } from 'typeorm';

import User from '../models/User';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();

    const usersWithoutPassword = users.map((user) => {
      // @ts-expect-error
      delete user.password;
      return user;
    })
    return usersWithoutPassword;
  }
}
export default ListUserService;

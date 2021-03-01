import { Router } from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersController from '@modules/users/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', ensureAuthenticated, usersController.show)
usersRouter.post('/', usersController.create);

export default usersRouter;

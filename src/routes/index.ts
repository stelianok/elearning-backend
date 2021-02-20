import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './session.routes';
import coursesRouter from './courses.routes';
import lessonsRouter from './lessons.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/courses', coursesRouter);
routes.use('/lessons', ensureAuthenticated, lessonsRouter);

export default routes;

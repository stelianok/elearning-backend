import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './session.routes';
import coursesRouter from './courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/courses', coursesRouter)
export default routes;

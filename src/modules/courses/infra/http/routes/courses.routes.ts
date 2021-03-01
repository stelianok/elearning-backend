import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

import CoursesController from '@modules/courses/controllers/CoursesController';
import LessonsController from '@modules/courses/controllers/LessonsController';

const coursesRouter = Router();
const coursesController = new CoursesController();
const lessonsController = new LessonsController();

coursesRouter.get('/', coursesController.show);

coursesRouter.get('/:course_id/lessons', lessonsController.show);

coursesRouter.post('/', ensureAuthenticated, coursesController.create);

coursesRouter.put('/:id', ensureAuthenticated, coursesController.update);

coursesRouter.delete('/:id', ensureAuthenticated, coursesController.delete);

export default coursesRouter;


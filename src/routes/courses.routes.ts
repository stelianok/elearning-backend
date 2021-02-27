import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CoursesController from '../controllers/CoursesController';
import LessonsController from '../controllers/LessonsController';

const coursesRouter = Router();
const coursesController = new CoursesController();
const lessonsController = new LessonsController();

coursesRouter.get('/', coursesController.show);

coursesRouter.get('/:course_id/lessons', lessonsController.show);

coursesRouter.post('/', ensureAuthenticated, coursesController.create);

coursesRouter.put('/:id', ensureAuthenticated, coursesController.update);

coursesRouter.delete('/:id', ensureAuthenticated, coursesController.delete);

export default coursesRouter;


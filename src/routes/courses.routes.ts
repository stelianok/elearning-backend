import { Router, Request, Response } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateCourseService from '../services/CreateCourseService';
import ListCoursesService from '../services/ListCoursesService';

const coursesRouter = Router();

coursesRouter.get('/', async (request: Request, response: Response) => {
  const { name } = request.query;

  const listCoursesService = new ListCoursesService();

  const courses = await listCoursesService.execute(name?.toString());

  return response.json(courses);
});

coursesRouter.post('/', ensureAuthenticated, async (request: Request, response: Response) => {
  const { name, image } = request.body;

  const createCourseService = new CreateCourseService();
  const course = await createCourseService.execute({ name, image });

  return response.json(course);

});

coursesRouter.put('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'OK'
  });
});

coursesRouter.delete('/', async (request: Request, response: Response) => {
  return response.sendStatus(204);
});

export default coursesRouter;


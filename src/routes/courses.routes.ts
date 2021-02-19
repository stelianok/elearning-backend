import { Router, Request, Response } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateCourseService from '../services/CreateCourseService';

const coursesRouter = Router();

coursesRouter.get('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'OK'
  });
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


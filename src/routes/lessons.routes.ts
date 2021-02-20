import { Router, Request, Response } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateLessonService from '../services/CreateLessonService';

const lessonsRouter = Router();

lessonsRouter.post('/', async (request: Request, response: Response) => {
  const { name, order, duration, course_id, video_id } = request.body;
  const createLessonService = new CreateLessonService();

  const lesson = await createLessonService.execute({
    name,
    order,
    duration,
    course_id,
    video_id
  });
  return response.json(lesson);
});

lessonsRouter.put('/:id', async (request: Request, response: Response) => {

});

lessonsRouter.delete('/:id', async (request: Request, response: Response) => {

});
export default lessonsRouter;

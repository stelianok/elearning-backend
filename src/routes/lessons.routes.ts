import { Router, Request, Response } from 'express';

import CreateLessonService from '../services/CreateLessonService';
import UpdateLessonService from '../services/UpdateLessonService';
import DeleteLessonService from '../services/DeleteLessonService';

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
  const { id } = request.params;
  const { name, order, duration, course_id, video_id } = request.body;

  const updateLessonService = new UpdateLessonService();

  const updatedLesson = await updateLessonService.execute({
    id,
    name,
    order,
    duration,
    course_id,
    video_id
  });

  return response.json(updatedLesson);
});

lessonsRouter.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const deleteLessonService = new DeleteLessonService();

  await deleteLessonService.execute(id);

  return response.sendStatus(204);
});
export default lessonsRouter;

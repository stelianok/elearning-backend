import { Request, Response } from 'express';

import ListCourseLessonsService from '../services/ListCourseLessonsService';
import CreateLessonService from '../services/CreateLessonService';
import UpdateLessonService from '../services/UpdateLessonService';
import DeleteLessonService from '../services/DeleteLessonService';

export default class LessonsController {

  async show(request: Request, response: Response) {
    const { course_id } = request.params;
    const { lesson_id } = request.query;

    const listCourseLessonsService = new ListCourseLessonsService();

    const courseLessons = await listCourseLessonsService.execute({
      course_id,
      lesson_id: lesson_id?.toString()
    });

    return response.json(courseLessons);
  }

  async create(request: Request, response: Response) {
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
  }
  async update(request: Request, response: Response) {
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
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteLessonService = new DeleteLessonService();

    await deleteLessonService.execute(id);

    return response.sendStatus(204);
  }
}

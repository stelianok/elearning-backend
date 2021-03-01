import { Request, Response } from 'express';
import * as yup from 'yup';

import ListCourseLessonsService from '../services/ListCourseLessonsService';
import CreateLessonService from '../services/CreateLessonService';
import UpdateLessonService from '../services/UpdateLessonService';
import DeleteLessonService from '../services/DeleteLessonService';

export default class LessonsController {

  async show(request: Request, response: Response) {
    const { course_id } = request.params;
    const { lesson_id } = request.query;

    const listCourseLessonsService = new ListCourseLessonsService();

    const paramsSchema = yup.object().shape({
      course_id: yup.string().uuid().required()
    });

    const querySchema = yup.object().shape({
      lesson_id: yup.string().uuid()
    });

    try {
      await Promise.all([
        paramsSchema.validate(request.params, { abortEarly: false }),
        querySchema.validate(request.query, { abortEarly: false })
      ]);

      const courseLessons = await listCourseLessonsService.execute({
        course_id,
        lesson_id: lesson_id?.toString()
      });

      return response.json(courseLessons);
    }
    catch (error) {
      return response.status(422).json({ error });
    }
  }

  async create(request: Request, response: Response) {
    const { name, order, duration, course_id, video_id } = request.body;
    const createLessonService = new CreateLessonService();

    const schema = yup.object().shape({
      name: yup.string().required(),
      order: yup.number().integer().moreThan(-1).default(0),
      duration: yup.number().positive().required(),
      course_id: yup.string().uuid().required(),
      video_id: yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false })

      const lesson = await createLessonService.execute({
        name,
        order,
        duration,
        course_id,
        video_id
      });

      return response.json(lesson);
    }
    catch (error) {
      return response.status(422).json(error);
    }

  }
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, order, duration, course_id, video_id } = request.body;
    const updateLessonService = new UpdateLessonService();

    const schema = yup.object().shape({
      name: yup.string().required(),
      order: yup.number().integer().moreThan(-1).default(0).required(),
      duration: yup.number().positive().required(),
      course_id: yup.string().uuid(),
      video_id: yup.string().required()
    });

    try {
      await Promise.all([
        yup.string().uuid().required().validate(id),
        schema.validate(request.body)
      ])
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
    catch (error) {
      return response.status(422).json(error);
    }

  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteLessonService = new DeleteLessonService();
    try {
      await yup.string().uuid().required().validate(id);

      await deleteLessonService.execute(id);

      return response.sendStatus(204);

    }
    catch (error) {
      return response.status(422).json(error);
    }

  }
}

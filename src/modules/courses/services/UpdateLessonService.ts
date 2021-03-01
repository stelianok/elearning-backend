import { getRepository } from 'typeorm';

import Lesson from '../infra/typeorm/entities/Lesson';
import AppError from 'shared/errors/AppError';

interface RequestDTO {
  id: string;
  name: string;
  order: number;
  duration: number;
  course_id?: string;
  video_id: string;
}
export default class UpdateLessonService {

  public async execute({ id, name, order, duration, course_id, video_id }: RequestDTO): Promise<Lesson> {
    const lessonRepository = getRepository(Lesson);
    const lesson = await lessonRepository.findOne(id);

    if (!lesson) {
      throw new AppError("Lesson doesn't exist");
    }

    lesson.name = name;
    lesson.order = order;
    lesson.duration = duration;

    if (course_id) {
      lesson.course_id = course_id;
    }

    lesson.video_id = video_id;

    await lessonRepository.save(lesson);

    return lesson;
  }
}

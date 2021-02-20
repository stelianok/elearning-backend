import { getRepository } from 'typeorm';

import Course from '../models/Course';
import AppError from '../errors/AppError';
import Lesson from '../models/Lesson';

interface RequestDTO {
  name: string;
  order: number;
  duration: number;
  course_id: string;
  video_id: string;
}

export default class CreateLessonService {

  public async execute({ name, order, duration, course_id, video_id }: RequestDTO): Promise<Lesson> {
    const lessonsRepository = getRepository(Lesson);
    const courseRepository = getRepository(Course);

    const lessonExists = await lessonsRepository.findOne({ where: { video_id } });
    const courseExists = await courseRepository.findOne({ id: course_id });

    if (lessonExists) {
      throw new AppError("This lesson is already registered");
    }
    if (!courseExists) {
      throw new AppError("This course doesn't exist");
    }

    const lesson = lessonsRepository.create({ name, order, duration, course_id, video_id });

    await lessonsRepository.save(lesson);

    return lesson;
  }
}

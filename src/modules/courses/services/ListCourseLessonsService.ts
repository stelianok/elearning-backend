import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Course from '../infra/typeorm/entities/Course';
import Lesson from '../infra/typeorm/entities/Lesson';

interface RequestDTO {
  course_id: string;
  lesson_id?: string;
}
interface ResponseDTO {
  course_name: string;
  lessons: Lesson[]
}
export default class ListCourseLessonsService {
  public async execute({ course_id, lesson_id }: RequestDTO): Promise<ResponseDTO | Lesson> {
    const coursesRepository = getRepository(Course);
    const lessonsRepository = getRepository(Lesson);

    const course = await coursesRepository.findOne({ id: course_id });
    if (!course) {
      throw new AppError("Course does not exist", 404);
    }

    if (lesson_id) {
      const lesson = await lessonsRepository.findOne({ where: { course_id, id: lesson_id } });
      if (!lesson) {
        throw new AppError("Lesson doesn't exist", 404);
      }
      return lesson;
    }

    const lessons = await lessonsRepository.find({
      where: { course_id },
      order: {
        order: "ASC",
      }
    });

    return { course_name: course.name, lessons };
    /**
     * Recebe o id de um curso
     * Lista todas as aulas de um curso específico de acordo a coluna "order" em ordem crescente.
     *
     */
  }
}

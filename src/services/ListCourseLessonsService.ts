import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Course from '../models/Course';
import Lesson from '../models/Lesson';

interface ResponseDTO {
  course_name: string;
  lessons: Lesson[]
}
export default class ListCourseLessonsService {
  public async execute(id: string): Promise<ResponseDTO> {
    const coursesRepository = getRepository(Course);
    const lessonsRepository = getRepository(Lesson);

    const course = await coursesRepository.findOne(id);
    if (!course) {
      throw new AppError("Course does not exist");
    }

    const lessons = await lessonsRepository.find({
      where: { course_id: id },
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

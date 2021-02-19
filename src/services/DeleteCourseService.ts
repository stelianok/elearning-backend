import { getRepository } from 'typeorm';
import Course from '../models/Course';
import AppError from '../errors/AppError';

export default class DeleteCourseService {
  public async execute(id: string): Promise<void> {
    const coursesRepository = getRepository(Course);

    const course = await coursesRepository.findOne(id);

    if (!course) {
      throw new AppError("Course does not exist");
    }

    await coursesRepository.delete(id);

  }
}

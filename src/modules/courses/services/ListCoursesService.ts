import { getRepository, Like } from 'typeorm';
import Course from '../infra/typeorm/entities/Course';

export default class ListCoursesService {
  public async execute(name?: string): Promise<Course[]> {
    const coursesRepository = getRepository(Course);

    if (!name) {
      const courses = await coursesRepository.find();
      return courses;
    }
    const courses = await coursesRepository.find({
      where: {
        name: Like(`%${name}%`)
      }
    });

    return courses;
  }
}

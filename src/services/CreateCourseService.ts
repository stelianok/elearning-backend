import { getRepository } from 'typeorm';

import Course from '../models/Course';
import AppError from '../errors/AppError';

interface RequestDTO {
  name: string;
  image?: string | undefined;
}

export default class CreateCourseService {

  public async execute({ name, image }: RequestDTO): Promise<Course> {
    const courseRepository = getRepository(Course);
    const defaultImage = 'https://github.com/stelianok/elearningApp/blob/main/src/assets/img/Talk.png';

    const courseExists = await courseRepository.findOne({ where: { name } });

    if (courseExists) {
      throw new AppError("A course with the same name is already registered");
    }

    if (!image) {
      image = defaultImage;
    }
    const course = courseRepository.create({ name, image });

    await courseRepository.save(course);

    return course;
  }
}

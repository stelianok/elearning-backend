import { getRepository, Not } from 'typeorm';

import Course from '../models/Course';
import AppError from '../errors/AppError';

interface RequestDTO {
  id: string;
  name: string;
  image?: string | undefined;
}

export default class UpdateCourseService {

  public async execute({ id, name, image }: RequestDTO): Promise<Course> {
    const courseRepository = getRepository(Course);
    const course = await courseRepository.findOne(id);

    if (!course) {
      throw new AppError("course doesn't exist");
    }

    const coursesWithSameNameExists = await courseRepository.findOne({
      where: {
        name,
        id: Not(id)
      }
    });

    if (coursesWithSameNameExists) {
      throw new AppError("A course with this name already exists");
    }


    if (!image) {
      image = course.image;
    }

    course.name = name;
    course.image = image;

    await courseRepository.save(course);

    return course;
  }
}

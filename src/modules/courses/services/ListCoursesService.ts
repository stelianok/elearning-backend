import { getRepository, Like } from 'typeorm';
import Course from '../infra/typeorm/entities/Course';
import Lesson from '../infra/typeorm/entities/Lesson';


interface CourseWithNumberOfLessons extends Course {
  numberOfLessons: number;
}
export default class ListCoursesService {
  public async execute(name?: string): Promise<CourseWithNumberOfLessons[]> {
    const coursesRepository = getRepository(Course);
    const lessonsRepository = getRepository(Lesson);

    let courses = await coursesRepository.find();
    const lessons = await lessonsRepository.find();

    if (name) {
      courses = await coursesRepository.find({
        where: {
          name: Like(`%${name}%`),
        },
      });
    }

    const coursesWithNumberOfLessons = courses.map((course) => {

      const NumberOfLesson = lessons.filter((lesson) => lesson.course_id === course.id).length;
      return (
        {
          ...course,
          numberOfLessons: NumberOfLesson
        }
      )
    })
    return coursesWithNumberOfLessons;

  }
}

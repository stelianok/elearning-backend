import { Request, Response } from 'express';
import CreateCourseService from '../services/CreateCourseService';
import DeleteCourseService from '../services/DeleteCourseService';
import ListCoursesService from '../services/ListCoursesService';
import UpdateCourseService from '../services/UpdateCourseService';

export default class CoursesController {
  async show(request: Request, response: Response) {
    const { name } = request.query;

    const listCoursesService = new ListCoursesService();

    const courses = await listCoursesService.execute(name?.toString());

    return response.json(courses);
  }

  async create(request: Request, response: Response) {
    const { name, image } = request.body;

    const createCourseService = new CreateCourseService();
    const course = await createCourseService.execute({ name, image });

    return response.json(course);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, image } = request.body;

    const updateCourseService = new UpdateCourseService();

    const updatedCourse = await updateCourseService.execute({ id, name, image });

    return response.json(updatedCourse);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCourseService = new DeleteCourseService();

    await deleteCourseService.execute(id);

    return response.sendStatus(204);
  }
}

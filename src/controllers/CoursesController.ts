import { Request, Response } from 'express';
import * as yup from 'yup';
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
    const schema = yup.object().shape({
      name: yup.string().required(),
      image: yup.string().url(),
    });

    try {
      await schema.validate(request.body);

      const course = await createCourseService.execute({ name, image });

      return response.json(course);
    }
    catch (error) {
      return response.status(422).json(error);
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, image } = request.body;
    const updateCourseService = new UpdateCourseService();

    const schema = yup.object().shape({
      name: yup.string().required(),
      image: yup.string().url(),
    });

    try {
      await Promise.all([
        yup.string().uuid().required().validate(id),
        schema.validate(request.body)
      ]);

      const updatedCourse = await updateCourseService.execute({ id, name, image });

      return response.json(updatedCourse);
    }
    catch (error) {
      return response.status(422).json(error);
    }



  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteCourseService = new DeleteCourseService();
    try {
      await yup.string().uuid().required().validate(id);

      await deleteCourseService.execute(id);

      return response.sendStatus(204);

    }
    catch (error) {
      return response.status(422).json(error);
    }
  }
}

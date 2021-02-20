import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Lesson from '../models/Lesson';

export default class DeleteLessonService {
  public async execute(id: string): Promise<void> {
    const lessonsRepository = getRepository(Lesson);

    const lesson = await lessonsRepository.findOne(id);

    if (!lesson) {
      throw new AppError("Lesson does not exist");
    }

    await lessonsRepository.delete(id);

  }
}

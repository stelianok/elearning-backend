import { Router } from 'express';

import LessonsController from '@modules/courses/controllers/LessonsController';

const lessonsRouter = Router();

const lessonsController = new LessonsController();

lessonsRouter.post('/', lessonsController.create);

lessonsRouter.put('/:id', lessonsController.update);

lessonsRouter.delete('/:id', lessonsController.delete);

export default lessonsRouter;

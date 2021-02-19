import { Router, Request, Response } from 'express';

const coursesRouter = Router();

coursesRouter.get('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'OK'
  });
});

coursesRouter.post('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'OK'
  });
});

coursesRouter.put('/', async (request: Request, response: Response) => {
  return response.json({
    message: 'OK'
  });
});

coursesRouter.delete('/', async (request: Request, response: Response) => {
  return response.sendStatus(204);
});

export default coursesRouter;


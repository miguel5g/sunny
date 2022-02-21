import { Request, Response } from 'express';
import { app } from '../app';

export class AppController {
 handle(request: Request, response: Response):  object {
  return response.json({
    app: "Sunny",
    environment: process.env.NODE_ENV,
    lifetime: Date.now() - app.locals.startTime
  })
 }
}

import type { NextFunction, Request, Response } from 'express';

import { routesLogger } from '@utils/logger';

export function Logger(request: Request, _: Response, next: NextFunction) {
  // Log the request method and path
  routesLogger(request.method, request.path);

  // Passing the request to the next middleware
  next();
}

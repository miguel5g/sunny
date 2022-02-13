import { Router } from 'express'

import { Logger } from './middlewares/Logger';

const routes = Router();

routes.use(Logger); // Logger middleware

routes.get("/", (request, response) => {
  response.json({
    message: "Hello World"
  })
})

export { routes }

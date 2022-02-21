import 'dotenv/config';

import { appLogger, socketLogger } from '@utils/logger';
import { server } from './http';
import { app } from './app';

server.listen(process.env.PORT || 3000, () => {
  appLogger(`Server is running in http://localhost:${process.env.PORT || 3000}`);
  socketLogger(`Websocket is running in ws://localhost:${process.env.PORT || 3000}`);
});

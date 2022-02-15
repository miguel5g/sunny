import 'dotenv/config';

import { server } from './http';
import { appLogger, socketLogger } from './utils/logger';

server.listen(process.env.PORT || 3000, () => {
  appLogger(`Server is running in http://localhost:${process.env.PORT || 3000}`);
  socketLogger(`Websocket is running in ws://localhost:${process.env.PORT || 3000}`);
});

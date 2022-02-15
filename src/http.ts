import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import { app } from './app';
import { socketLogger } from './utils/logger';

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket: Socket) => {
  socketLogger(`${socket.id} connected`);
});

export { server, io };

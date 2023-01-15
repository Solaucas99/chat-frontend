/* eslint-disable */
import * as socketio from 'socket.io-client';

declare module 'socket.io-client' {
  export interface Socket {
    userid: string;
    username: string;
    sessionID: string;
  }
}

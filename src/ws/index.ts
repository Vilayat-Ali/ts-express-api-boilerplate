// lib
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

// event handlers

export class ServeWebSocket {
  private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

  constructor(
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) {
    this.io = io;

    // mapping event
  }

  public getIO(): Server<
    DefaultEventsMap,
    DefaultEventsMap,
    DefaultEventsMap,
    any
  > {
    return this.io;
  }

  public setIO(
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) {
    this.io = io;
  }
}

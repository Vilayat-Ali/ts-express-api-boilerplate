// lib
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

// event handlers
import handler from "./handlers";

export class ServeWebSocket {
  private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

  constructor(
    io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
  ) {
    this.io = io;

    // mapping event
    handler.map((handler) => {
      this.io.on(handler.eventName, handler.handler);
    });
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

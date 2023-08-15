// lib
import { z } from "zod";
import { Socket } from "socket.io";

// zod schema
import { wsHandler } from "../../../zod/ws.zod";

export const connectionHandler: z.infer<typeof wsHandler> = wsHandler.parse({
  eventName: "connection",
  handler: (socket: Socket) => {
    console.log("We are live and connected");
    console.log(socket.id);
  },
});

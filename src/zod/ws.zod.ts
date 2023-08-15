// lib
import { z } from "zod";
import { Socket } from "socket.io";

export const wsHandler = z.object({
  eventName: z.string().nonempty(),
  handler: z.function().args(z.instanceof(Socket)).returns(z.void()),
});

export const wsHandlerArray = z.array(
  z.object({
    eventName: z.string().nonempty(),
    handler: z.function().args(z.instanceof(Socket)).returns(z.void()),
  })
);

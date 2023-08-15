// lib
import { z } from "zod";

// zod schemas
import { wsHandlerArray } from "../../zod/ws.zod";

// importing handlers
import { connectionHandler } from "./connection";

const handlers: z.infer<typeof wsHandlerArray> = wsHandlerArray.parse([
  // connection
  connectionHandler,
]);

export default handlers;

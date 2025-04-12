import { createServer } from "node:http";
import * as express from "express";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const server = createServer(app);

server.listen(8080, () => {
  console.info("Started Sugarcane Backend on port 8080.");
});

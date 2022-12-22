import express from "express";
import cors from "cors";

import wishListRoute from './routes/wishListRoute.js';


const server = express();
const port = 3500;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

server.use(cors());
server.use(express.json());


//   Routes
server.use('/api', wishListRoute);





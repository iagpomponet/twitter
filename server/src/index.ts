import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";

import { AppDataSource } from "./data-source";

import userRoutes from "./routes/user.routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 3000;
    const corsConfig = {
      origin: "http://127.0.0.1:5173",
      credentials: true,
    };

    app.use(cors(corsConfig));

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

    // dev logs
    app.use(morgan("dev"));

    // this is for being able to get body json from request
    app.use(express.json());

    // Routes
    app.use("/users", userRoutes);
  })
  .catch((error) => console.log(error));

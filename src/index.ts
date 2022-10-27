import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

export const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get("/", (_, res) => res.json("Server is running."));

  app.get("/test", (_, res) =>
    res.json({ info: `Current hour: ${new Date()}` })
  );

  app.listen(process.env.PORT || 5000, () => {
    console.log(
      `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
    );
  });
};

startServer();

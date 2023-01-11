import 'dotenv/config';

import { connect } from '@infra/database';
import { AppError } from "@infra/error/AppError";
import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from '../swagger.json';
import { router } from "./infra/http/routes/index.routes";

export class App {
  public app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.init();
  }

  private async init(): Promise<void> {
    this.setupExpress();
    this.setupRoutes();
    this.errors();
    await this.databaseSetup();
  }

  private setupExpress() {
    this.app.set("port", this.port || process.env.PORT || 3001);
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  private setupRoutes() {
    this.app.use(router);
  }

  private errors() {
    this.app.use(
      (err: Error, _request: Request, response: Response, _next: NextFunction) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({ message: err.message });
        }
        return response.status(500).json({
          status: "error",
          message: `Internal server error - ${err.message}`,
        });
      }
    )
  }

  public async databaseSetup(): Promise<void> {
    await connect()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
  }

  public start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server is running on port", this.app.get("port"));
    });
  }
}
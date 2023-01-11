import { Router } from "express";
import { ListUniversitiesController } from "../controllers/listUniverities.controller";


const listUniversitiesRoute = Router()

const listUniversitiesController = new ListUniversitiesController()

listUniversitiesRoute.get("/", listUniversitiesController.handle)

export { listUniversitiesRoute };

import { Router } from "express";
import { CreateUniversitiesController } from '../controllers/createUniversities.controller';

const createUniversityRoute = Router()

const createUniversitiesController = new CreateUniversitiesController()

createUniversityRoute.post("/", createUniversitiesController.handle)

export { createUniversityRoute };

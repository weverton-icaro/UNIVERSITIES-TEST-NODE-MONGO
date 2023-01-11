import { Router } from "express";
import { ShowUniversitiesController } from "../controllers/showUniversities.controller";


const showUniversityRoute = Router()
const showUniversitiesController = new ShowUniversitiesController()

showUniversityRoute.get("/:id", showUniversitiesController.handle)

export { showUniversityRoute };

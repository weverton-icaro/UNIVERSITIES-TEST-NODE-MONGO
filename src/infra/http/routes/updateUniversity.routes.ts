import { Router } from "express";
import { UpdateUniversityController } from "../controllers/updateUniversities.controller";

const updateUniversityRoute = Router()
const updateUniversityController = new UpdateUniversityController()

updateUniversityRoute.put("/:id", updateUniversityController.handle)

export { updateUniversityRoute };

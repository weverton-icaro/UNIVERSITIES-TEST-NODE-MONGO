import { Router } from "express";
import { DeleteUniversityController } from "../controllers/deleteUniversity.controller";

const deleteUniversityRoute = Router();
const deleteUniversityController = new DeleteUniversityController()

deleteUniversityRoute.delete("/:id", deleteUniversityController.handle)

export { deleteUniversityRoute };

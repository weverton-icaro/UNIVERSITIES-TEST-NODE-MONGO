import { Router } from "express";
import { createUniversityRoute } from "./createUniversities.routes";
import { deleteUniversityRoute } from "./deleteUniversity.routes";
import { listUniversitiesRoute } from "./listUniversities.routes";
import { showUniversityRoute } from "./showUniversity.routes";
import { updateUniversityRoute } from "./updateUniversity.routes";

const router = Router();

router.use('/universities', createUniversityRoute )
router.use('/universities', listUniversitiesRoute)
router.use('/universities', showUniversityRoute)
router.use('/universities', updateUniversityRoute)
router.delete('/universities', deleteUniversityRoute)

export { router };

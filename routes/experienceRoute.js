import { Router } from "express";
import { addExperience, getAllExperiences } from "../controllers/experienceController.js";

const router = new Router();

router.route("/").get(getAllExperiences).post(addExperience);

export default router;
import { Router } from "express";
import { addRepoInfo, getAllRepoInfo } from "../controllers/repoInfoController.js";

const router = new Router();

router.route("/").get(getAllRepoInfo).post(addRepoInfo);

export default router;
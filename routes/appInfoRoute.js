import { Router } from "express";
import { addAppInfo, getAllAppInfo } from "../controllers/appInfoController.js";

const router = new Router();

router.route("/").get(getAllAppInfo).post(addAppInfo);

export default router;
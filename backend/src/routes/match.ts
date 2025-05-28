import { Router } from "express";
import matchController from "../controllers/match";

const router = Router();

router.post("/", matchController.createMatch);
router.get("/", matchController.getAllMatches);
router.get("/:id", matchController.getMatchById);
router.put("/:id", matchController.updateMatch);
router.delete("/:id", matchController.deleteMatch);

export default router;
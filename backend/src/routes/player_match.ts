import { Router } from "express";
import playerInMatchController from "../controllers/player_match";

const router = Router();

router.post("/", playerInMatchController.createPlayerInMatch);
router.get("/", playerInMatchController.getAllPlayerInMatch);
router.get("/:id", playerInMatchController.getPlayerInMatchById);
router.put("/:id", playerInMatchController.updatePlayerInMatch);
router.delete("/:id", playerInMatchController.deletePlayerInMatch);

export default router;
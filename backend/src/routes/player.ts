import { Router } from "express";
import playerController from "../controllers/player";

const router = Router();

router.post("/", playerController.createPlayer);
router.get("/", playerController.getAllPlayers);
router.get("/:id", playerController.getPlayerById);
router.put("/:id", playerController.updatePlayer);
router.delete("/:id", playerController.deletePlayer);

export default router;
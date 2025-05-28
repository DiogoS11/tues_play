import { Request, Response } from "express";
import playerInMatchService from "../services/player_match";
import { PlayerInMatchInput } from "../types/player_match";

const createPlayerInMatch = async (req: Request, res: Response) => {
  const data: PlayerInMatchInput = req.body;
  try {
    const record = await playerInMatchService.createPlayerInMatch(data);
    res.status(201).json(record);
  } catch (err) {
    console.error("Error creating playerInMatch:", err);
    res.status(500).json({ error: "Failed to create record" });
  }
};

const updatePlayerInMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const record = await playerInMatchService.updatePlayerInMatch(id, req.body);
    res.status(200).json(record);
  } catch (err) {
    console.error("Error updating playerInMatch:", err);
    res.status(500).json({ error: "Failed to update record" });
  }
};

const deletePlayerInMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const record = await playerInMatchService.deletePlayerInMatch(id);
    res.status(200).json(record);
  } catch (err) {
    console.error("Error deleting playerInMatch:", err);
    res.status(500).json({ error: "Failed to delete record" });
  }
};

const getAllPlayerInMatch = async (_req: Request, res: Response) => {
  try {
    const records = await playerInMatchService.getAllPlayerInMatch();
    res.status(200).json(records);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to fetch records" });
  }
};

const getPlayerInMatchById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const record = await playerInMatchService.getPlayerInMatchById(id);
    res.status(200).json(record);
  } catch (err) {
    console.error("Error fetching record:", err);
    res.status(500).json({ error: "Failed to fetch record" });
  }
};

const playerInMatchController = {
  createPlayerInMatch,
  updatePlayerInMatch,
  deletePlayerInMatch,
  getAllPlayerInMatch,
  getPlayerInMatchById,
};

export default playerInMatchController;

import playerService from "../services/player"
import { PlayerInput } from "../types/player";
import { Request, Response } from "express";

const createPlayer = async (req : Request, res : Response) => {
    const playerData : PlayerInput = req.body;

    try {
        const player = await playerService.createPlayer(playerData);
    
        res.status(201).json(player);
      } catch (error) {
        console.error('Error creating player:', error);
        res.status(500).json({ error: 'Error creating player' });
      }
};

const updatePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    const playerData : PlayerInput = req.body;
    
    try {
        const player = await playerService.updatePlayer(id, playerData);
    
        res.status(200).json(player);
      } catch (error) {
        console.error('Error updating player:', error);
        res.status(500).json({ error: 'Error updating player' });
      }
}

const getAllPlayers = async (req: Request, res: Response) => {
    try {
        const players = await playerService.getAllPlayers();
    
        res.status(200).json(players);
      } catch (error) {
        console.error('Error getting players:', error);
        res.status(500).json({ error: 'Error getting players' });
      }
}

const getPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const player = await playerService.getPlayerById(id);
    
        res.status(200).json(player);
      } catch (error) {
        console.error('Error getting player:', error);
        res.status(500).json({ error: 'Error getting player' });
      }
}

const deletePlayer = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const player = await playerService.deletePlayer(id);
    
        res.status(200).json(player);
      } catch (error) {
        console.error('Error deleting player:', error);
        res.status(500).json({ error: 'Error deleting player' });
      }
}

const playerController = {
    createPlayer,
    updatePlayer,
    getAllPlayers,
    getPlayerById,
    deletePlayer
}

export default playerController;
    
import matchService from "../services/match";
import { MatchInput } from "../types/match";
import { Request, Response } from "express";


const createMatch = async (req: Request, res: Response) => {
    const matchData : MatchInput = req.body;

    try {
        const match = await matchService.createMatch(matchData);
    
        res.status(201).json(match);
      } catch (error) {
        console.error('Error creating match:', error);
        res.status(500).json({ error: 'Error creating match' });
      }
};

const updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const matchData : MatchInput = req.body;
    
    try {
        const match = await matchService.updateMatch(id, matchData);
    
        res.status(200).json(match);
      } catch (error) {
        console.error('Error updating match:', error);
        res.status(500).json({ error: 'Error updating match' });
      }
}

const getAllMatches = async (req: Request, res: Response) => {
    try {
        const matches = await matchService.getAllMatches();
    
        res.status(200).json(matches);
      } catch (error) {
        console.error('Error getting matches:', error);
        res.status(500).json({ error: 'Error getting matches' });
      }
}

const getMatchById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const match = await matchService.getMatchById(id);
    
        res.status(200).json(match);
      } catch (error) {
        console.error('Error getting match:', error);
        res.status(500).json({ error: 'Error getting match' });
      }
}

const deleteMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const match = await matchService.deleteMatch(id);
    
        res.status(200).json(match);
      } catch (error) {
        console.error('Error deleting match:', error);
        res.status(500).json({ error: 'Error deleting match' });
      }
}

const matchController = {
    createMatch,
    updateMatch,
    getAllMatches,
    getMatchById,
    deleteMatch
}

export default matchController;
    
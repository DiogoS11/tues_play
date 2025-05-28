import prisma from "../prisma/client";
import { PlayerInput } from "../types/player";

const createPlayer = async (data: PlayerInput) => {
    return await prisma.player.create({
        data: data,
      });
};

const getAllPlayers = async () => {
    return await prisma.player.findMany();
};

const getPlayerById = async (id: string) => {
    return await prisma.player.findUnique({
        where: { id },
      });
};

const updatePlayer = async (id: string, data: PlayerInput) => {
    return await prisma.player.update({
        where: { id },
        data: data,
      });
};

const deletePlayer = async (id: string) => {
    return await prisma.player.delete({
        where: { id },
      });
};

const playerService = {
    createPlayer,
    getAllPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
}

export default playerService
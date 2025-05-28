import prisma from "../prisma/client";
import { PlayerInMatchInput } from "../types/player_match";

const createPlayerInMatch = async (input: PlayerInMatchInput) => {
  return await prisma.playerInmatch.create({
    data: input,
  });
};

const updatePlayerInMatch = async (id: string, input: Partial<PlayerInMatchInput>) => {
  return await prisma.playerInmatch.update({
    where: { id },
    data: input,
  });
};

const deletePlayerInMatch = async (id: string) => {
  return await prisma.playerInmatch.delete({
    where: { id },
  });
};

const getAllPlayerInMatch = async () => {
  return await prisma.playerInmatch.findMany({
    include: {
      player: true,
      match: true,
    },
  });
};

const getPlayerInMatchById = async (id: string) => {
  return await prisma.playerInmatch.findUnique({
    where: { id },
    include: {
      player: true,
      match: true,
    },
  });
};

export default {
  createPlayerInMatch,
  updatePlayerInMatch,
  deletePlayerInMatch,
  getAllPlayerInMatch,
  getPlayerInMatchById,
};

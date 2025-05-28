import prisma from "../prisma/client";
import { MatchInput } from "../types/match";

const createMatch = async (input: MatchInput) => {
  return await prisma.match.create({
    data: {
      date: input.date ?? new Date(),
      scoreA: input.scoreA,
      scoreB: input.scoreB,
      players: {
        create: input.playerIds?.map((playerId: string) => ({
          player: { connect: { id: playerId } },
        })) || [],
      },
    },
    include: { players: true },
  });
};

const getAllMatches = async () => {
  return await prisma.match.findMany({
    include: { players: true },
  });
};

const getMatchById = async (id: string) => {
  return await prisma.match.findUnique({
    where: { id },
    include: { players: true },
  });
};

const updateMatch = async (id: string, input: MatchInput) => {
  return await prisma.match.update({
    where: { id },
    data: {
      date: input.date,
      scoreA: input.scoreA,
      scoreB: input.scoreB,
      players: {
        set: [],
        create: input.playerIds?.map((playerId: string) => ({
          player: { connect: { id: playerId } },
        })) || [],
      },
    },
    include: { players: true },
  });
};

const deleteMatch = async (id: string) => {
  return await prisma.match.delete({
    where: { id },
  });
};

const matchService = {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
};

export default matchService;

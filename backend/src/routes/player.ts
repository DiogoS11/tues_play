import { Router } from "express";
import prisma from "../prisma/client";

const router = Router();

router.post("/", async (req, res) => {
    const { name } = req.body;

    const player = await prisma.player.create({
        data: {
            name
        },
    });
    res.status(201).json(player);
});

router.get("/", async (req, res) => {
    const players = await prisma.player.findMany();
    res.status(200).json(players);
});

export default router;

import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

type teamProps = {
    id?: string
    name: string
    pokemon_id?: number | null
}

export class TeamController {
  async insertTeam(request: Request, response: Response) {

    const { name } = request.body;

    const team = await prismaClient.poketeam.create({
        data: {
            name: name
        } as teamProps
    });

    try {
        return response.json(team)
    } catch (error) {
        return response.status(500).json({ message: 'Error'});
    }
  }

  async selectAllTeams(request: Request, response: Response) { 
    const teams = await prismaClient.poketeam.findMany()

    try {
        return response.json(teams)
    } catch (error) {
        return response.status(500).json({ message: 'Error'});
    }

  }

  async removeTeam(request: Request, response: Response) { 
    const { teamId } = request.body;

    const team = await prismaClient.poketeam.delete({
        where: {
            id: teamId,
        },
    })

    try {
        return response.json(team)
    } catch (error) {
        return response.status(500).json({ message: 'Error'});
    }

  }
}
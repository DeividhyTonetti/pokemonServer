import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class PokemonController {
    async updatePokemon(request: Request, response: Response) {

        const { teamId, pokemonId } = request.body;

        const pokemon = await prismaClient.poketeam.update({
            where: {
                id: teamId
            },
            data: {
                pokemon_id: pokemonId
            }
        });

        return response.json(pokemon)
    }

    async selectPokemon(request: Request, response: Response) {

        const { teamId } = request.body;

        const pokemon = await prismaClient.poketeam.findUnique({
            where: {
                id: teamId,
            },
        })

        return response.json(pokemon)
    }

    async removePokemon(request: Request, response: Response) {

        const { name } = request.body;

        const pokemon = await prismaClient.poketeam.deleteMany({
            where: {
                name
            },
        })

        return response.json(pokemon)
    }
}

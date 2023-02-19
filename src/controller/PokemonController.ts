import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class PokemonController {
    async createPokemon(request: Request, response: Response) {

        const { teamName, pokemonId } = request.body;

        const pokemon = await prismaClient.poketeam.create({
            data: {
                name: teamName,
                pokemon_id: pokemonId
            }
        });

        return response.json(pokemon)
    }

    async removePokemon(request: Request, response: Response) {

        const { pokemonId } = request.params;

        const pokemon = await prismaClient.poketeam.delete({
            where: {
                id: pokemonId
            },
        })

        return response.json(pokemon)
    }
}

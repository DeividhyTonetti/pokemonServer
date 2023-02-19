import { Router } from "express";
import { PokemonController } from "./controller/PokemonController";
import { TeamController } from "./controller/TeamController";

const router = Router();

const pokemonController = new PokemonController();
const teamController = new TeamController();

// Pokemon
router.post('/addPokemon', pokemonController.createPokemon);
router.delete('/removePokemon/:pokemonId', pokemonController.removePokemon);

// Team
router.post('/createTeam', teamController.insertTeam);
router.delete('/removeTeam/:teamId', teamController.removeTeam);

// General
router.get('/getAllTeams', teamController.selectAllTeams);


export { router }
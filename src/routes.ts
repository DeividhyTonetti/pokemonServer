import { Router } from "express";
import { PokemonController } from "./controller/PokemonController";
import { TeamController } from "./controller/TeamController";

const router = Router();

const pokemonController = new PokemonController();
const teamController = new TeamController();

// Pokemon
router.post('/addPokemon', pokemonController.updatePokemon);
router.delete('/removePokemon/:pokemonId', pokemonController.removePokemon);
router.get('/:pokemonId', pokemonController.selectPokemon);

// Team
router.post('/createTeam', teamController.insertTeam);
router.delete('/removeTeam/:teamId', teamController.insertTeam);
router.get('/:teamId', teamController.selectTeam);


export { router }
import fs from "fs"
import { IPokemonData } from "../app/types/interfaces/PokemonData"
import { Pkm } from "../app/types/enum/Pokemon"
import { Synergy } from "../app/types/enum/Synergy"
import { mapToObj } from "../app/utils/map"
import { values } from "../app/utils/schemas"
import { precomputedPokemons } from "./precomputed-pokemons"

console.time("precompute-pokemon-data")

const data = new Map<Pkm, Omit<IPokemonData, "name" | "index">>()

precomputedPokemons.forEach((pokemon) => {
  data.set(pokemon.name, {
    skill: pokemon.skill,
    passive: pokemon.passive,
    stars: pokemon.stars,
    rarity: pokemon.rarity,
    additional: pokemon.additional,
    range: pokemon.range,
    types: values(pokemon.types) as Synergy[],
    evolution: pokemon.evolution === Pkm.DEFAULT ? null : pokemon.evolution
  })
})

fs.writeFileSync(
  "../app/models/precomputed/pokemons-data.json",
  JSON.stringify(mapToObj(data))
)

console.timeEnd("precompute-pokemon-data")

import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export default async function getPokemonInfo(nameOrId: string) {
  try {
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameOrId}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };

    return pokemon;
  } catch (error) {
    return null;
  }
}

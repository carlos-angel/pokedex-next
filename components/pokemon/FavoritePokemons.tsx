import { Grid } from '@nextui-org/react';
import FavoriteCardPokemons from './FavoriteCardPokemons';
interface Props {
  pokemons: number[];
}

export default function FavoritePokemons({ pokemons }: Props) {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoriteCardPokemons id={id} key={id} />
      ))}
    </Grid.Container>
  );
}

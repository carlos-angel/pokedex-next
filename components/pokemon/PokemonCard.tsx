import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export default function PokemonCard({ pokemon }: Props) {
  const router = useRouter();
  const onClick = () => router.push(`/pokemon/${pokemon.id}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}

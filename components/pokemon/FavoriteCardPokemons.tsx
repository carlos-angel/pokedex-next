import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  id: number;
}

export default function FavoriteCardPokemons({ id }: Props) {
  const router = useRouter();
  const onClick = () => router.push(`/pokemon/${id}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }} onClick={onClick}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
}

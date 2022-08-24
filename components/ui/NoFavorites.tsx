import { Container, Image, Text } from '@nextui-org/react';

export function NoFavorites() {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h2>Agrega a tu primer pokemon</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        width={250}
        height={250}
        alt='ditto'
      />
    </Container>
  );
}

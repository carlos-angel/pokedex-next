import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icono de la app'
        width={70}
        height={70}
      />

      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </nav>
  );
}

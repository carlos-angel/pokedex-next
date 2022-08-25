import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { pokemons } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  const isNotFavoritesPokemons = favoritesPokemons.length === 0;

  useEffect(() => {
    const favoritesPokemons = pokemons();
    setFavoritesPokemons(favoritesPokemons);
  }, []);

  return (
    <Layout title='Mis pokemons favoritos'>
      {isNotFavoritesPokemons && <NoFavorites />}
      {!isNotFavoritesPokemons && <FavoritePokemons pokemons={favoritesPokemons} />}
    </Layout>
  );
};
export default FavoritesPage;

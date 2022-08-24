const FAVORITES_STORAGE = 'pokemon-next-favorites';

export function toggleFavorite(id: number): void {
  const favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES_STORAGE) || '[]');
  const isFav = favorites.includes(id);
  if (isFav) {
    const newFavorites = favorites.filter((fav) => fav !== id);
    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newFavorites));
  } else {
    favorites.push(id);
    localStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favorites));
  }
}

export function existInFavorites(id: number): boolean {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES_STORAGE) || '[]');
  const isFav = favorites.includes(id);
  return isFav;
}

export function pokemons(): number[] {
  const favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES_STORAGE) || '[]');
  return favorites;
}

import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const ORIGIN = typeof window === 'undefined' ? '' : window.location.origin;

export function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Pokémon App'}</title>
        <meta name='author' content='Carlos Alberto Angel' />
        {description && <meta name='description' content={description} />}
        <meta name='keywords' content={`pokémon pokedex ${title}`} />

        <meta property='og:title' content={`Ìnformación sobre ${title}`} />
        <meta property='og:description' content={`Est es la página sobre ${title}`} />
        <meta property='og:image' content={`${ORIGIN}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
}

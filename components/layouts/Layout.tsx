import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : 'Pokémon App'}</title>
        <meta name='author' content='Carlos Alberto Angel' />
        {description && <meta name='description' content={description} />}
        <meta name='keywords' content={`pokémon pokedex ${title}`} />
      </Head>
      <main>{children}</main>
    </>
  );
}

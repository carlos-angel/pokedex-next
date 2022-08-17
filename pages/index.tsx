import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const Home: NextPage = () => {
  return (
    <Layout title='Pokedex'>
      <h1>Hello world!</h1>
      <Button color='gradient'>Click me</Button>
    </Layout>
  );
};

export default Home;

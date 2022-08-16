import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello world!</h1>
      <Button color='gradient'>Click me</Button>
    </>
  );
};

export default Home;

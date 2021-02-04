import React from 'react';

import Input from '../../components/Input';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Previsão do tempo</h1>
      <form action="">
        <Input />
      </form>
    </Container>
  );
};

export default Home;

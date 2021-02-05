import React from 'react';
import { FaSearch } from 'react-icons/fa';

import Card from '../../components/Card';
import Input from '../../components/Input';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Previsão do tempo</h1>

      <Card />

      <form action="/">
        <Input
          name="search"
          icon={FaSearch}
          type="text"
          placeholder="Insira aqui o nome da cidade"
        />
      </form>
    </Container>
  );
};

export default Home;

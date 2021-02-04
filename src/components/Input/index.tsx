import React from 'react';

import { Container } from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <input
        type="text"
        name="seach"
        placeholder="Insira aqui o nome da cidade"
      />
    </Container>
  );
};

export default Input;

import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 16px;
  width: 450px;
  color: #666360;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: 0;
    flex: 1;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

import React from 'react';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

export default Loading;

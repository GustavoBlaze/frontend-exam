import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, ButtonsContainer, OptionButton } from './styles';

function Logout({ onAccept = () => {}, onDecline = () => {} }) {
  return (
    <Container>
      <Text>Do you really wish to log out?</Text>
      <ButtonsContainer>
        <OptionButton onClick={onAccept}>YES</OptionButton>
        <OptionButton onClick={onDecline}>no</OptionButton>
      </ButtonsContainer>
    </Container>
  );
}

Logout.propTypes = {
  onAccept: PropTypes.func,
  onDecline: PropTypes.func,
};

export default Logout;

import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContentContainer } from './styles';
import Sidebar from '../Sidebar';

function Layout({ content: Content }) {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <Content />
      </ContentContainer>
    </Container>
  );
}

Layout.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Layout;

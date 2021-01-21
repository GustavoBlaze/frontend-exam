import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  CloseButton,
  Modal,
  ModalBody,
  ModalBodyCorner,
} from './styles';

function DefaultOverlay({ children, onClose = undefined, ...rest }) {
  return (
    <Container {...rest}>
      {onClose && (
        <CloseButton type="button" onClick={onClose}>
          close
        </CloseButton>
      )}
      <Modal>
        <ModalBody>
          <ModalBodyCorner />
          <ModalBodyCorner />
          <ModalBodyCorner />
          <ModalBodyCorner />
          {children}
        </ModalBody>
      </Modal>
    </Container>
  );
}

DefaultOverlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onClose: PropTypes.func,
};

export default DefaultOverlay;

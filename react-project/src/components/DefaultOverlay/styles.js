import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.overlayBackground};
  z-index: 99;
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 2.6rem;
  right: 2.6rem;

  &:not(:hover) {
    border-color: transparent;
    color: inherit;
  }
`;

export const Modal = styled.div`
  padding: 1.2rem;
  box-shadow: 0px 0px 50px #000000;
  background: ${({ theme }) => theme.colors.modalBackground};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
`;

export const ModalBody = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.modalBackground};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex: 1;
  padding: 1.3rem;

  .modal-corner {
    &:nth-child(1) {
      top: -1px;
      left: -1px;
      border-right: 1px solid ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:nth-child(2) {
      top: -1px;
      right: -1px;
      border-left: 1px solid ${({ theme }) => theme.colors.primary};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:nth-child(3) {
      bottom: -1px;
      left: -1px;
      border-right: 1px solid ${({ theme }) => theme.colors.primary};
      border-top: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:nth-child(4) {
      bottom: -1px;
      right: -1px;
      border-left: 1px solid ${({ theme }) => theme.colors.primary};
      border-top: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ModalBodyCorner = styled.div.attrs(() => ({
  className: 'modal-corner',
}))`
  position: absolute;
  background: inherit;
  width: 1.3rem;
  height: 1.3rem;
`;

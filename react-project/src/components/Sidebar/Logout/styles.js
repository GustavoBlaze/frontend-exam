import styled from 'styled-components';
import Button from '../../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.8rem 7.7rem 5.6rem;
`;

export const Text = styled.h4`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 300;

  margin-bottom: 6.6rem;
`;

export const ButtonsContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
`;

export const OptionButton = styled(Button)`
  &:not(:first-child) {
    margin-left: 1.6rem;

    &:not(:hover) {
      border-color: transparent;
      color: inherit;
    }
  }
`;

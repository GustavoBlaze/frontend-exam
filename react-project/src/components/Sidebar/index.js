import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import Logout from './Logout';
import { Container, Logo, Option, Overlay } from './styles';

function Sidebar() {
  const location = useLocation();
  const [mustShowOverlay, setMustShowOverlay] = useState(false);
  const { doLogout } = useAuth();

  const [options, setOptions] = useState(
    [
      {
        title: 'trailers',
        route: '/trailers',
      },
      {
        title: 'options',
        route: '/options',
      },
      {
        title: 'logout',
      },
    ].map((option) => ({
      selected: option.route === location.pathname,
      ...option,
    })),
  );

  const handleOptionClick = useCallback(({ title }) => {
    if (title === 'logout') {
      setMustShowOverlay(true);
    } else
      setOptions((oldOptions) =>
        oldOptions.map((option) => ({
          ...option,
          selected: option.title === title,
        })),
      );
  }, []);

  const handleOverlayClose = useCallback(() => setMustShowOverlay(false), []);

  return (
    <>
      <Container>
        <Logo />
        {options.map(({ title, selected }, index) => (
          <Option
            key={index.toString()}
            selected={selected || undefined}
            onClick={() => handleOptionClick({ title })}
          >
            {title}
          </Option>
        ))}
      </Container>
      <Overlay show={mustShowOverlay}>
        <Logout onAccept={doLogout} onDecline={handleOverlayClose} />
      </Overlay>
    </>
  );
}

export default Sidebar;

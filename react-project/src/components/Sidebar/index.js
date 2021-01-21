import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Logo, Option } from './styles';

function Sidebar() {
  const location = useLocation();

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
    setOptions((oldOptions) =>
      oldOptions.map((option) => ({
        ...option,
        selected: option.title === title,
      })),
    );
  }, []);

  return (
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
  );
}

export default Sidebar;

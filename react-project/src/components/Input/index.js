import React, { useState, useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({
  name,
  title,
  value = '',
  placeholder = '',
  type = 'text',
  onChange = () => {},
  initFocused = false,
  isRequired = undefined,
  ...rest
}) {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  useEffect(() => initFocused && inputRef?.current?.focus(), [
    initFocused,
    inputRef,
  ]);

  return (
    <Container isFilled={!!value} isFocused={isFocused} {...rest}>
      <label htmlFor={`input-${name}`}>{title}</label>
      <input
        ref={inputRef}
        id={`input-${name}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        type={type}
        required={isRequired}
      />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  initFocused: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default Input;

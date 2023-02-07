/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useCallback } from 'react';

import { InputContainer, Icon, InputTexto } from './styles';

function InputText({ icon, placeholder, color, ...inputProps }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputValueRef = useRef({ value: '' });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);
  return (
    <InputContainer isFocused={isFocused} color={color}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? color : 'rgba(0, 0, 0, 0.2)'}
      />
      <InputTexto
        placeholder={placeholder}
        {...inputProps}
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...inputProps}
      />
    </InputContainer>
  );
}

export default InputText;

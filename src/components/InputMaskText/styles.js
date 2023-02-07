import styled, { css } from 'styled-components/native';

import { MaskedTextInput } from 'react-native-mask-text';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const InputContainer = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  margin-bottom: 10px;
  border-radius: 10px;
  background: #fff;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);

  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #cf004d;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.color};
    `}
`;
export const InputTexto = styled(MaskedTextInput)`
  flex: 1;
  width: 100%;
  font-size: 16px;
  font-family: 'Righteous_400Regular';
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: 16px;
`;

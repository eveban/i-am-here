import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const InputContainer = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  margin-bottom: 10px;
  border-radius: 15px;
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
export const InputTexto = styled(TextInput)`
  flex: 1;
  width: 100%;
  font-size: 16px;
  font-family: 'Righteous_400Regular';
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-right: 16px;
`;

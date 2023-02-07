import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const MapContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BodyContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;

  padding-bottom: 20px;
  padding-right: 20px;
`;

export const ContainerModal = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-top: 22px;
`;

export const ButtonShowModal = styled.TouchableOpacity`
  width: 72px;
  height: 72px;

  background-color: #243f4d;
  border-radius: 36px;

  align-items: center;
  justify-content: center;

  elevation: 5;
`;

export const ContainerButtomModal = styled.View`
  width: 100%;

  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 60px;

  background-color: #243f4d;
  border: 1px solid #436372;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const TextButtonModal = styled.Text`
  color: #fcd7b6;
  font-size: 14px;

  font-family: 'Righteous_400Regular';
`;

export const ContainerCoords = styled.View`
  /* margin-top: 10px; */
  width: 100%;
  flex-direction: row;
`;

export const ContainerCoordsLabel = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const ContainerCoordsInfo = styled.View`
  flex: 1;
  flex-direction: column;

  align-items: flex-end;
`;

export const TextCoord = styled.Text`
  color: #d9d8d9;
  font-size: 16px;

  font-family: 'Righteous_400Regular';
`;

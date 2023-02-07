/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Modal, Alert, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import Feather from '@expo/vector-icons/Feather';
import { api } from '../../services/api';

import InputMaskText from '../../components/InputMaskText';

import Loading from '../../components/Loading';
import mapMarkerImg from '../../assets/iamhere.png';

import {
  Container,
  MapContainer,
  TextCoord,
  Button,
  BodyContainer,
  ButtonShowModal,
  ContainerButtomModal,
  TextButtonModal,
  ContainerCoords,
  ContainerCoordsLabel,
  ContainerCoordsInfo,
  ContainerModal,
} from './styles';

function Localization() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cliente, setCliente] = useState('');
  const [location, setLocation] = useState();

  const getCurrentyPosition = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Ops!', 'Permissão de acesso a localização negada.');
      return;
    }
    const position = await Location.getCurrentPositionAsync({});

    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.013,
      longitudeDelta: 0.013,
    });
  }, []);

  useEffect(() => {
    getCurrentyPosition();
  }, [getCurrentyPosition]);

  const handleUpdateCoordenadas = useCallback(async () => {
    if (!cliente || cliente.length < 7) {
      Alert.alert(
        'Ops!',
        'Código inválido',
        // [
        //   {
        //     text: 'Cancel',
        //     onPress: () => null,
        //     style: 'cancel',
        //   },
        //   { text: 'YES', onPress: () => {} },
        // ]
      );
      return;
    }
    const { data } = await api.put('coordenadas', {
      codcfo: cliente,
      lat: location.latitude,
      lng: location.longitude,
    });
    if (data.message) {
      Alert.alert('Ops!', data.message);
      return;
    }
    setCliente('');
    setModalVisible(!modalVisible);
  }, [cliente, location, modalVisible]);

  setTimeout(async () => {
    await getCurrentyPosition();
  }, 5000);

  if (!location.latitude || !location.longitude) {
    return <Loading />;
  }

  return (
    <Container>
      <StatusBar translucent />
      <MapContainer>
        <MapView
          style={{ flex: 1 }}
          initialRegion={location}
          region={location}
          showsTraffic
          mapType="standard"
          // userLocationCalloutEnabled
          showsUserLocation
          followUserLocation
          onPress={e =>
            setLocation({
              ...location,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }
          // loadingEnabled
        >
          <Marker
            title="Você está aqui"
            icon={mapMarkerImg}
            coordinate={location}
          />
        </MapView>
      </MapContainer>
      <BodyContainer>
        <ContainerModal>
          <Modal animationType="slide" transparent visible={modalVisible}>
            <View style={styles.modalView}>
              <InputMaskText
                keyboardType="numeric"
                mask="99.9999"
                placeholder="Código do cliente"
                icon="account-multiple"
                color="#243f4d"
                onChangeText={text => setCliente(text)}
              />
              <ContainerCoords>
                <ContainerCoordsLabel>
                  <TextCoord>Latitude: </TextCoord>
                  <TextCoord>Longitude: </TextCoord>
                </ContainerCoordsLabel>
                <ContainerCoordsInfo>
                  <TextCoord>{location.latitude}</TextCoord>
                  <TextCoord>{location.longitude}</TextCoord>
                </ContainerCoordsInfo>
              </ContainerCoords>
              <ContainerButtomModal>
                <Button
                  onPress={() => [
                    getCurrentyPosition(),
                    setModalVisible(!modalVisible),
                  ]}
                >
                  <TextButtonModal>Cancelar</TextButtonModal>
                </Button>
                <Button onPress={handleUpdateCoordenadas}>
                  <TextButtonModal>Salvar</TextButtonModal>
                </Button>
              </ContainerButtomModal>
            </View>
          </Modal>
        </ContainerModal>
        <ButtonShowModal
          onPress={() => [getCurrentyPosition(), setModalVisible(true)]}
        >
          <Feather name="map-pin" size={28} color="#fcd7b6" />
        </ButtonShowModal>
      </BodyContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Localization;

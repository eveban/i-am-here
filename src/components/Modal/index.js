import React from 'react';
import { Modal } from 'react-native';

import { Container, ModalView } from './styles';


const MyModal = ({ children, ...props }) => {
  return (
    <Modal {...props}>
      <Container>
        <ModalView>{children}</ModalView>
      </Container>
    </Modal>
  );
};

export default MyModal;

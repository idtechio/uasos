import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback } from "react-native";
import Card from "../Card";

import { CenterBox, Curtain } from "./style";
import { CardModalProps } from "./types";

const CardModal = ({
  cardStyle,
  children,
  onModalClose,
  closeable = true,
}: CardModalProps) => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible || !closeable}
        onRequestClose={() => {
          if (closeable) {
            setModalVisible(false);
            onModalClose?.();
          }
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <CenterBox>
            <Curtain onClick={(event) => event.stopPropagation()} />
            <Card style={cardStyle}>{children}</Card>
          </CenterBox>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default CardModal;

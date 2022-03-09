import { useState } from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  useWindowDimensions,
} from "react-native";
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
  const { width: screenWidth } = useWindowDimensions();
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
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <CenterBox
            style={[
              {
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                ...StyleSheet.absoluteFillObject,
                position: Platform.OS === "web" ? "fixed" : "absolute",
              },
            ]}
          >
            <Curtain onClick={(event) => event.stopPropagation()} />
            <Card
              width={screenWidth - 30}
              style={[{ maxWidth: 600 }, cardStyle]}
            >
              {/* <CloseIconWrapper onPress={() => setModalVisible(false)}>
                <CrossIcon />
              </CloseIconWrapper> */}
              {children}
            </Card>
          </CenterBox>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default CardModal;

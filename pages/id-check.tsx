import { useRouter } from "next/router";
import styled from "styled-components/native";
import IdCheck from "../src/components/IdCheck";
import CrossIcon from "../src/style/svgs/cross.svg";

export const CloseButton = styled.Pressable`
  position: absolute;
  top: 5;
  right: 5;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
`;

const IdCheckPage = () => {
  const router = useRouter();

  const closeModalHandler = () => {
    router.back();
  };

  return (
    <>
      <CloseButton onPress={closeModalHandler}>
        <CrossIcon />
      </CloseButton>
      <IdCheck />
    </>
  );
};

export default IdCheckPage;

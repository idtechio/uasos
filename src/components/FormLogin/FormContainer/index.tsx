import styled from "styled-components/native";

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return <FormContainerWrapper>{children}</FormContainerWrapper>;
};

export default FormContainer;

const FormContainerWrapper = styled.View`
  display: flex;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

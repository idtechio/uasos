import type { AppBodyProps } from "./types";
import { AppBodyWraper, Content, StyledScrollView } from "./style";
import Header from "../../Header";
import Footer from "../../Footer";

const CompositionAppBody = ({ children }: AppBodyProps) => {
  return (
    <AppBodyWraper>
      <Header />
      <StyledScrollView
        contentContainerStyle={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Content>{children}</Content>
      </StyledScrollView>
      <Footer />
    </AppBodyWraper>
  );
};

export default CompositionAppBody;

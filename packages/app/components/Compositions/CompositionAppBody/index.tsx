import React from "react";
import type { AppBodyProps } from "./types";
import { AppBodyWraper, Content, StyledScrollView } from "./style";
// import Header from "../../Header";
// import Footer from "../../Footer";

const CompositionAppBody = ({ children }: AppBodyProps) => {
  return (
    <AppBodyWraper>
      {/* <Header /> */}
      <StyledScrollView>
        <Content>{children}</Content>
        {/* <Footer /> */}
      </StyledScrollView>
    </AppBodyWraper>
  );
};

export default CompositionAppBody;

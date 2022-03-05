import type { AppBodyProps } from "./types";
import { AppBodyWraper } from "./style";
import Header from "../../Header";
import Footer from "../../Footer";

const CompositionAppBody = ({ children }: AppBodyProps) => {
  return (
    <AppBodyWraper>
      <Header />
      {children}
    </AppBodyWraper>
  );
};

export default CompositionAppBody;

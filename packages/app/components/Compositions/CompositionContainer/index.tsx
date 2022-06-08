import React from "react";

import type { ContainerProps } from "./types";
import { Container } from "./style";

// ? ScrollView don't work with project default component file structure and styled-components ?

const CompositionContainer = ({ children }: ContainerProps) => {
  return <Container showsVerticalScrollIndicator={false}>{children}</Container>;
};

export default CompositionContainer;

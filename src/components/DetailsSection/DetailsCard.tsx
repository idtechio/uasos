import React from "react";
import { CardWrapper } from "./style";

type DetailsCardProps = {
  type?: string;
  additionalInfo?: string[];
  children: JSX.Element;
};

const DetailsCard = ({ children }: DetailsCardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default DetailsCard;

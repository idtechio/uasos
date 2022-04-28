import { useState } from "react";
import styled from "styled-components/native";
import ArrowIcon from "../../src/style/svgs/arrow.svg";

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const Accordion = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 360px;
    margin: 15px;
    padding: 18px;
    font-size: 24px;
    text-align: left;
    background-color: #fff;
    border: none;
    border-radius: 16px;
    outline: none;
    box-shadow: 0px 4px 24px rgba(34, 60, 80, 0.2);
    transition: 0.4s;
    cursor: pointer;
  `;
  const Panel = styled.View`
    width: 360px;
    padding: 0 18px;
    max-height: ${(props) => (props.isOpen ? "auto" : 0)};
    font-size: 12px;
    overflow: hidden;
    transition: max-height 2s ease-out;
  `;

  const ArrowIconWrapper = styled.View`
    display: flex;
    justify-content: space-around;
  `;

  const Hr = styled.View`
    display: flex;
    align-self: center;
    width: 324px;
    height: 3px;
    background: #f8f8f8;
  `;

  const ContentWrapper = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
  `;

  return (
    <>
      <Accordion key={title} onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <ArrowIconWrapper
          style={isOpen ? { transform: [{ rotate: "180deg" }] } : null}
        >
          <ArrowIcon />
        </ArrowIconWrapper>
      </Accordion>
      <Panel isOpen={isOpen}>
        <Hr />
        <ContentWrapper>{content}</ContentWrapper>
        <Hr />
      </Panel>
    </>
  );
}

export default Accordion;

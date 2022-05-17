import { useState } from "react";
import styled from "styled-components/native";
import ArrowIcon from "../../style/svgs/arrow.svg";

function Accordion({
  nameCategory,
  content,
}: {
  nameCategory: string;
  content: object;
}) {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const Accordion = styled.View<{
    isOpenCategory?: boolean;
    isMain?: boolean;
    onClick: (e: Event) => void;
  }>`
    display: ${(props) => (props.isOpenCategory ? "flex" : "none")};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin: ${(props) => (props.isMain ? "0 15px 0" : "15px")};
    padding: 18px;
    padding-left: ${(props) => (props.isMain ? 0 : 18)}px;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    letter-spacing: ${(props) => (props.isMain ? "0.5px" : "normal")};
    background-color: ${(props) => (props.isMain ? "none" : "#fff")};
    border: none;
    border-radius: 16px;
    outline: none;
    box-shadow: ${(props) =>
      props.isMain ? "none" : "0px 4px 4px rgba(34, 60, 80, 0.2)"};
    transition: 0.4s;
    cursor: ${(props) => (props.isMain ? "auto" : "pointer")};
  `;

  const Panel = styled.View<{ isOpenText: boolean }>`
    padding: 0 18px;
    max-height: ${(props) => (props.isOpenText ? "auto" : 0)};
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
    margin-top: 5px;
    margin-bottom: 15px;
  `;

  const QuestionWrapper = styled.View``;

  const NameCategoryWrapper = styled.View``;

  const QuestionAccordion = (question: string, answer: string) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Accordion isOpenCategory={true} onClick={() => setIsOpen(!isOpen)}>
          <QuestionWrapper>{question}</QuestionWrapper>
          <ArrowIconWrapper
            style={isOpen ? { transform: [{ rotate: "180deg" }] } : null}
          >
            <ArrowIcon />
          </ArrowIconWrapper>
        </Accordion>
        <Panel isOpenText={isOpen}>
          <Hr />
          <ContentWrapper>{answer}</ContentWrapper>
          <Hr />
        </Panel>
      </>
    );
  };

  const renderInnerAccordion = () => {
    return Object.values(content).map((elContentValue) => {
      return QuestionAccordion(elContentValue.question, elContentValue.answer);
    });
  };

  return (
    <>
      <Accordion
        key={nameCategory}
        isOpenCategory={isOpenCategory}
        isMain={true}
        onClick={() => setIsOpenCategory(!isOpenCategory)}
      >
        <NameCategoryWrapper>{nameCategory}</NameCategoryWrapper>
      </Accordion>
      {renderInnerAccordion()}
    </>
  );
}

export default Accordion;

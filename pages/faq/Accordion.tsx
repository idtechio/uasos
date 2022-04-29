import { useState } from "react";
import styled from "styled-components/native";
import ArrowIcon from "../../src/style/svgs/arrow.svg";

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
    width: 360px;
    margin: 15px;
    padding: 18px;
    padding-left: ${(props) =>
      props.isMain && props.isOpenCategory ? 0 : 18}px;
    font-size: 24px;
    text-align: left;
    background-color: #fff;
    border: none;
    border-radius: 16px;
    outline: none;
    box-shadow: ${(props) =>
      props.isMain && props.isOpenCategory
        ? "none"
        : "0px 4px 24px rgba(34, 60, 80, 0.2)"};
    transition: 0.4s;
    cursor: pointer;
  `;
  const Panel = styled.View<{ isOpenText: boolean }>`
    width: 360px;
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
    margin-top: 15px;
    margin-bottom: 15px;
  `;

  const renderAccordion = (question, answer) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpenCategory) {
      return null;
    }

    return (
      <>
        <Accordion
          // key={elContentValue}
          isOpenCategory={true}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{question}</div>
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
    return Object.values(content).map((elContentValue, index) => {
      return renderAccordion(elContentValue.question, elContentValue.answer);
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
        <div>{nameCategory}</div>
        {!isOpenCategory && (
          <ArrowIconWrapper
            style={
              isOpenCategory ? { transform: [{ rotate: "180deg" }] } : null
            }
          >
            <ArrowIcon />
          </ArrowIconWrapper>
        )}
      </Accordion>
      {renderInnerAccordion()}
    </>
  );
}

export default Accordion;

import { ReactNode } from "react";
import styled from "styled-components";

type FilterParams = {
  contentName: string;
  children: ReactNode;
  background?: string;
  fontColor?: string;
};

FilterContent.defaultProps = {
  background: "#ffffff",
  fontColor: "#000000",
};

function FilterContent({
  contentName,
  children,
  background = "#ffffff",
  fontColor = "#000000",
}: FilterParams) {
  return (
    <Content $backColor={background} $fontColor={fontColor}>
      <span>{contentName}</span>
      {children}
    </Content>
  );
}

const Content = styled.div<{ $backColor: string; $fontColor: string }>`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;

  background-color: ${props =>
    props.$backColor ? props.$backColor : "#ffffff"};
  color: ${props => (props.$fontColor ? props.$fontColor : "#000000")};
  font-weight: bold;
  cursor: pointer;
`;

export default FilterContent;

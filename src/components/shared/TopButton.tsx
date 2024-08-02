import styled from "styled-components";
import { IoIosArrowRoundUp } from "react-icons/io";

import useScrollStore from "../../store/scroll.ts";

function TopButton() {
  const { scroll } = useScrollStore();

  return (
    <StyledTopButton
      className={scroll === "UP" ? "SHOW" : "HIDE"}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <IoIosArrowRoundUp className="top_arrow icon" />
    </StyledTopButton>
  );
}

const StyledTopButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 10;

  border: none;
  transition-duration: 0.3s;

  background-color: transparent;

  cursor: pointer;

  &.HIDE {
    transform: translateY(calc(100% + 80px));
  }

  .top_arrow {
    display: flex;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50px;

    background-color: #fff;
    opacity: 0.9;
  }
`;

export default TopButton;

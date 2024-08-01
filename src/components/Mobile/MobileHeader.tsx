import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";

import useScrollStore from "../../store/scroll.ts";
import MobileCategory from "./MobileCategory.tsx";

function MobileHeader() {
  const { scroll } = useScrollStore();

  return (
    <MobileHeaderSection className={scroll === "UP" ? "SHOW" : "HIDE"}>
      <InnerLayout>
        <IoIosArrowRoundBack className="back icon" />
        <h1 className="header_title">티셔츠</h1>
      </InnerLayout>
      <InnerLayout>
        <CiSearch className="search icon" />
        <CiShoppingBasket className="basket icon" />
      </InnerLayout>
      <MobileCategory />
    </MobileHeaderSection>
  );
}

const MobileHeaderSection = styled.section`
  position: sticky;
  top: 0;

  display: none;
  width: 100%;
  padding: 6px;
  height: 56px;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 63px;
  z-index: 6;

  background-color: #ffffff;

  &.HIDE {
    transform: translateY(-100%);
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: bold;
  }

  .icon {
    width: 44px;
    height: 44px;
    padding: 8px;
    cursor: pointer;
  }
`;

const InnerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default MobileHeader;

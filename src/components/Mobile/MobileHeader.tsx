import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";

function MobileHeader() {
  return (
    <MobileHeaderSection>
      <InnerLayout>
        <IoIosArrowRoundBack className="back icon" />
        <h1 className="header_title">티셔츠</h1>
      </InnerLayout>
      <InnerLayout>
        <CiSearch className="search icon" />
        <CiShoppingBasket className="basket icon" />
      </InnerLayout>
    </MobileHeaderSection>
  );
}

const MobileHeaderSection = styled.section`
  display: none;

  @media screen and (max-width: 1024px) {
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6px;
    height: 56px;

    font-weight: bold;
  }

  .header_title {
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

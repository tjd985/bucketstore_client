import styled from "styled-components";
import { CiSearch, CiLogin, CiShoppingBasket } from "react-icons/ci";

import { MENU_LIST, GROUP_LIST } from "../../constants/constants.ts";

function Header() {
  return (
    <StyledHeader>
      <Layout>
        <img
          src="/src/assets/header_logo.png"
          alt="버킷스토어 로고 이미지"
          height="100%"
        />
      </Layout>
      <Layout>
        <Container>
          {MENU_LIST.map(menu => {
            return (
              <span className={menu.split(" ").join("_")} key={menu}>
                {menu}
              </span>
            );
          })}
        </Container>
        <VertivalBar>|</VertivalBar>
        <Container>
          {GROUP_LIST.map(group => {
            return (
              <span className={group} key={group}>
                {group}
              </span>
            );
          })}
        </Container>
      </Layout>
      <Layout>
        <CiSearch />
        <CiLogin />
        <CiShoppingBasket />
      </Layout>
    </StyledHeader>
  );
}

const Layout = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;

  .올림픽_미리보기 {
    margin-left: 0;
  }

  .올림픽_미리보기,
  .아울렛 {
    color: #ff5112;
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 10px;

    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;

const VertivalBar = styled.section`
  margin: auto 10px;

  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 6;

  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 23px 10px;

  background-color: #000;

  ${Layout}:nth-of-type(1) {
    @media screen and (max-width: 1400px) {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }

  ${Layout}:nth-of-type(2) {
    flex-grow: 1;

    padding: 10px;
    order: 2;

    @media screen and (max-width: 1400px) {
      width: 100%;
      flex: auto;
      order: 3;
    }
  }

  ${Layout}:nth-of-type(3) {
    order: 3;
    justify-content: flex-end;

    color: #ffffff;

    * {
      width: 30px;
      height: 30px;
      margin: 5px;
    }

    @media screen and (max-width: 1400px) {
      order: 2;
    }
  }

  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    min-height: 90px;
    padding: 23px 10px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default Header;

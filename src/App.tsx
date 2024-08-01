import { Reset } from "styled-reset";
import styled from "styled-components";

import Header from "./components/Header/Header.tsx";
import MainContent from "./components/Main/MainContent.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import Product from "./components/Product/Product.tsx";
import MobileHeader from "./components/Mobile/MobileHeader.tsx";
import MobileBottomBar from "./components/Mobile/MobileBottomBar.tsx";

function App() {
  return (
    <StyledApp>
      <Reset />
      <Header />
      <MobileHeader />
      <MainContent>
        <SideBar />
        <Product />
      </MainContent>
      <MobileBottomBar />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  position: relative;

  * {
    box-sizing: border-box;
  }
`;

export default App;

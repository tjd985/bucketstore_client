import { Reset } from "styled-reset";

import Header from "./components/Header/Header.tsx";
import MainContent from "./components/Main/MainContent.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import Product from "./components/Product/Product.tsx";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <MainContent>
        <SideBar />
        <Product />
      </MainContent>
    </>
  );
}

export default App;

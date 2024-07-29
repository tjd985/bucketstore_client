import { Reset } from "styled-reset";

import Header from "./components/Header/Header.tsx";
import MainContent from "./components/Main/MainContent.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <MainContent>
        <SideBar />
      </MainContent>
    </>
  );
}

export default App;

import { ReactNode } from "react";
import styled from "styled-components";

function MainContent({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <section className="product_title">티셔츠</section>
      <ContentsLayout>{children}</ContentsLayout>
    </MainLayout>
  );
}

const MainLayout = styled.section`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  padding: 20px;

  background-color: #ffffff;

  .product_title {
    width: 100%;
    padding: 0 20px;
    margin: 20px 0 40px 0;

    font-size: 90px;
    font-weight: 600;
    line-height: 108px;

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const ContentsLayout = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export default MainContent;

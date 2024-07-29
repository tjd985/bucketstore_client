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
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  background-color: #ffffff;

  .product_title {
    padding: 0 20px;
    margin: 20px 0 40px 0;

    width: 100%;
    font-size: 90px;
    font-weight: 600;
    line-height: 108px;
  }
`;

const ContentsLayout = styled.section`
  width: 100%;
`;

export default MainContent;

import styled from "styled-components";

import Card from "./Card/Card.tsx";
import Loading from "../shared/Loading.tsx";
import SortingButton from "./SortingButton/SortingButton.tsx";

import useProductsStore from "../../store/products.ts";
import useParamsStore from "../../store/params.ts";
import useFetchStatus from "../../hooks/useFetchStatus.ts";
import useScroll from "../../hooks/useScroll.ts";

import CustomProduct from "../../types/CustomProduct.ts";

function Product() {
  const { type, page } = useParamsStore();
  const { products } = useProductsStore();
  const [isLoading, isError, errorMessage] = useFetchStatus(type, page);
  useScroll();

  return (
    <ProductLayout>
      <SortingLayout>
        <span>{products.totalLength}개</span>
        <SortingButton />
      </SortingLayout>
      <CardContainer>
        {products.productList.map((product: CustomProduct) => {
          const { imagePath, name, code, tagPrice, realPrice, badgeNameList } =
            product;

          return (
            <Card
              key={code}
              imagePath={imagePath}
              name={name}
              tagPrice={tagPrice}
              sellPrice={realPrice}
              badgeNameList={badgeNameList}
            />
          );
        })}
      </CardContainer>
      {isLoading && <Loading />}
    </ProductLayout>
  );
}

const ProductLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  width: 100%;
  padding: 0 20px;
`;

const SortingLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  font-weight: bold;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 80px 1px;
`;

export default Product;

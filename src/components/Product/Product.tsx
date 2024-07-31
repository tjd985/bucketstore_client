import { useState } from "react";
import styled from "styled-components";

import Card from "./Card/Card.tsx";
import Loading from "../shared/Loading.tsx";
import SortingButton from "./Sorting/Sorting.tsx";

import useProductsStore from "../../store/products.ts";
import useFetchStatus from "../../hooks/useFetchStatus.ts";

import ProductType from "../../types/Product.ts";
import { SortingTypeKR } from "../../types/Constant.ts";

function Product() {
  const [type, setType] = useState<SortingTypeKR>("최신순");
  const [page, setPage] = useState<number>(1);

  const { products } = useProductsStore();
  const [isError, errorMessage] = useFetchStatus(type, page);

  if (!products.productList.length) {
    return (
      <ProductLayout>
        <Loading />
      </ProductLayout>
    );
  }

  return (
    <ProductLayout>
      <SortingLayout>
        <span>{products.totalLength}개</span>
        <SortingButton type={type} handleChangeType={setType} />
      </SortingLayout>
      <CardContainer>
        {products.productList.map((product: ProductType) => {
          const { url, name, price, code } = product;
          const { real, tag } = price;

          return (
            <Card
              key={code}
              imagePath={url}
              name={name}
              tagPrice={tag}
              sellPrice={real}
            />
          );
        })}
      </CardContainer>
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
  height: calc(100vh - 127px);
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

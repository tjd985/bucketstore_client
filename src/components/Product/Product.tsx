import { useState } from "react";
import styled from "styled-components";
import { RiArrowUpDownLine } from "react-icons/ri";

import { nanoid } from "nanoid";

import Card from "./Card/Card.tsx";
import Loading from "../shared/Loading.tsx";

import useProductData from "../../hooks/useProductData.ts";

import Type from "../../types/Params.ts";
import ProductType from "../../types/Product.ts";

function Product() {
  const [type, setType] = useState<Type>("newest");
  const [page, setPage] = useState(1);
  const [productInformation, errorMessage, isLoading, isError] = useProductData(
    type,
    page,
  );

  if (isLoading) {
    return (
      <ProductLayout>
        <Loading />
      </ProductLayout>
    );
  }

  return (
    <ProductLayout>
      <SortingLayout>
        <span>{productInformation.totalLength}개</span>
        <SortingButtonWrapper>
          <SortingButton>최신순</SortingButton>
          <RiArrowUpDownLine className="sorting_icon" />
        </SortingButtonWrapper>
      </SortingLayout>
      <CardContainer>
        {productInformation.products.map((product: ProductType) => {
          const { url, name, price } = product;
          const { real, tag } = price;

          return (
            <Card
              key={nanoid(10)}
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

const SortingButtonWrapper = styled.div`
  position: relative;

  width: 120px;

  .sorting_icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    width: 16px;
    height: 16px;
  }
`;

const SortingButton = styled.button`
  width: 100%;
  padding: 5px 10px;
  border-radius: 30px;
  border: none;

  text-align: left;
  cursor: pointer;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 80px 1px;
`;

export default Product;

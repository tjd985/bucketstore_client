import { useState, memo } from "react";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import Badge from "./Badge.tsx";

type CardParams = {
  imagePath: string;
  name: string;
  tagPrice: number;
  sellPrice: number;
  badgeNameList: string[];
};

function Card({
  imagePath,
  name,
  tagPrice,
  sellPrice,
  badgeNameList,
}: CardParams) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <CardWrapper>
      <FavoriteSection
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </FavoriteSection>
      <ImageSection className="image_section">
        <img src={imagePath} alt={`${name}이미지`} width="100%" />
      </ImageSection>
      <DescriptionSection className="description_section">
        <h1 className="product_name">{name}</h1>
        <section className="price_section">
          <span className="sell_price">{sellPrice.toLocaleString()}</span>
          <span className="tag_price">{tagPrice.toLocaleString()}</span>
        </section>
      </DescriptionSection>
      <BadgeSection>
        {badgeNameList.map(badgeName => {
          return <Badge key={badgeName} name={badgeName} />;
        })}
      </BadgeSection>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const FavoriteSection = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  aspect-ratio: 3 / 4;
  width: 100%;

  background-color: #f4f4f4;
`;

const DescriptionSection = styled.section`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;

  > * {
    margin-top: 10px;

    font-size: 0.9rem;
  }

  .sell_price {
    margin-right: 5px;

    font-weight: bold;
  }

  .tag_price {
    color: #bbbbbb;
  }
`;

const BadgeSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export default memo(Card);

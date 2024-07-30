import styled from "styled-components";

type CardParams = {
  imagePath: string;
  name: string;
  tagPrice: number;
  sellPrice: number;
};

function Card({ imagePath, name, tagPrice, sellPrice }: CardParams) {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  cursor: pointer;
`;

const ImageSection = styled.section`
  width: 100%;
`;

const DescriptionSection = styled(ImageSection)`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
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

export default Card;

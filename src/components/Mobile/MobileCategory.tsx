import styled from "styled-components";

import useScrollStore from "../../store/scroll.ts";

import { CATEGORY_LIST } from "../../constants/constants.ts";

function MobileCategory() {
  const { scroll } = useScrollStore();

  return (
    <MobileCategorySection className={scroll === "UP" ? "NONE" : "STICKY"}>
      {CATEGORY_LIST.map(category => {
        return (
          <CategoryItem key={category} className="category">
            {category}
          </CategoryItem>
        );
      })}
    </MobileCategorySection>
  );
}

const MobileCategorySection = styled.section`
  position: absolute;
  top: 100%;
  box-sizing: border-box;

  display: none;
  width: 100%;
  padding: 16px 0 16px 20px;

  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  }
`;

const CategoryItem = styled.div`
  padding: 6px 15px 5px;
  border: 1px solid #000;
  border-radius: 16px;

  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
`;

export default MobileCategory;

import styled from "styled-components";

import { CATEGORY_LIST } from "../../constants/constants.ts";

function MobileCategory() {
  return (
    <MobileCategorySection>
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
  display: none;

  @media screen and (max-width: 1024px) {
    box-sizing: border-box;

    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    padding: 16px 0 16px 20px;
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

import styled from "styled-components";
import { IoIosRefresh } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

import FilterContent from "./FilterContent/FilterContent.tsx";

import { CATEGORY_LIST, FILTER_LIST } from "../../constants/constants.ts";

function SideBar() {
  return (
    <StyledSideBar>
      <CategoryLayout>
        {CATEGORY_LIST.map(category => {
          return <span key={category}>{category}</span>;
        })}
      </CategoryLayout>
      <FilterLayout>
        <FilterContent
          contentName="FILTER"
          background="#000000"
          fontColor="#ffffff"
        >
          <IoIosRefresh />
        </FilterContent>
        {FILTER_LIST.map(filterValue => {
          return (
            <FilterContent key={filterValue} contentName={filterValue}>
              <RiArrowDropDownLine />
            </FilterContent>
          );
        })}
      </FilterLayout>
    </StyledSideBar>
  );
}

const StyledSideBar = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 127px);
  margin-right: 40px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const CategoryLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 250px;
  gap: 5px;
  margin-bottom: 40px;

  cursor: pointer;

  span {
    font-size: 24px;
    line-height: 36px;
  }
`;

const FilterLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 250px;
  max-height: calc(100vh - 300px);
  gap: 5px;

  overflow-y: auto;
`;

export default SideBar;

import styled from "styled-components";
import { nanoid } from "nanoid";
import { IoIosRefresh } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

import FilterContent from "./FilterContent/FilterContent.tsx";

import { SIDEBAR } from "../../constants/constants.ts";

const { CATEGORY_LIST, FILTER_LIST } = SIDEBAR;

function SideBar() {
  return (
    <StyledSideBar>
      <CategoryLayout>
        {CATEGORY_LIST.map(category => {
          return <span key={nanoid(10)}>{category}</span>;
        })}
      </CategoryLayout>
      <FilterLayout>
        <FilterContent
          key={nanoid(10)}
          contentName="FILTER"
          background="#000000"
          fontColor="#ffffff"
        >
          <IoIosRefresh />
        </FilterContent>
        {FILTER_LIST.map(filterValue => {
          return (
            <FilterContent key={nanoid(10)} contentName={filterValue}>
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

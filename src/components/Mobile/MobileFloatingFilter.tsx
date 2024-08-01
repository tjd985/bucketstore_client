import styled from "styled-components";
import { HiOutlineFilter } from "react-icons/hi";

function MobileFloatingFilter() {
  return (
    <FilterButton>
      <HiOutlineFilter />
      <h1 className="filter_title">필터</h1>
    </FilterButton>
  );
}

const FilterButton = styled.button`
  position: absolute;
  top: -60px;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 0 30px;
  border: none;
  border-radius: 18px;
  gap: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
`;

export default MobileFloatingFilter;

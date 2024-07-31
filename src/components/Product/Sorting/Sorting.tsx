import { useState, MouseEvent, SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import { RiArrowUpDownLine } from "react-icons/ri";

import { SORTING_LIST_KR } from "../../../constants/constants.ts";
import { SortingTypeKR } from "../../../types/Constant.ts";

function SortingButton({
  type,
  handleChangeType,
}: {
  type: SortingTypeKR;
  handleChangeType: Dispatch<SetStateAction<SortingTypeKR>>;
}) {
  const [isClicked, setIsClicked] = useState(false);

  function handleSortingClick(ev: MouseEvent<HTMLElement>) {
    const listEl = ev.target as HTMLElement;

    handleChangeType(listEl.innerText as SortingTypeKR);
    setIsClicked(!isClicked);
  }

  return (
    <SortingButtonWrapper>
      <Button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {type}
      </Button>
      <RiArrowUpDownLine className="sorting_icon" />
      {isClicked && (
        <SortingList onClick={handleSortingClick}>
          {SORTING_LIST_KR.map((sorting: SortingTypeKR) => {
            return (
              <li key={sorting} value={sorting}>
                {sorting}
              </li>
            );
          })}
        </SortingList>
      )}
    </SortingButtonWrapper>
  );
}

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

const Button = styled.button`
  width: 100%;
  padding: 5px 10px;
  border-radius: 30px;
  border: none;

  text-align: left;
  cursor: pointer;
`;

const SortingList = styled.ul`
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 5px;
  border: 1px solid #e7e7e7;

  font-weight: normal;
  background-color: #ffffff;

  li {
    width: 100%;
    padding: 8px 0;

    font-size: 0.9rem;
    text-align: left;
    cursor: pointer;
  }
`;

export default SortingButton;

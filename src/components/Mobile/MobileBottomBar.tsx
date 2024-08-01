import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { IoPricetagOutline, IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import MobileFloatingFilter from "./MobileFloatingFilter.tsx";

const BottomBarButtons = [
  { icon: <CiMenuBurger className="menu icon" />, label: "메뉴" },
  { icon: <IoPricetagOutline className="tag icon" />, label: "브랜드" },
  { icon: <IoHomeOutline className="home icon" />, label: "홈" },
  { icon: <AiOutlineUser className="user icon" />, label: "마이페이지" },
  { icon: <FaRegHeart className="favorite icon" />, label: "찜" },
];

function MobileBottomBar() {
  return (
    <MobileBottomLayout>
      {BottomBarButtons.map(({ icon, label }) => {
        return (
          <BarItem key={label}>
            {icon}
            <h1 className="item_title">{label}</h1>
          </BarItem>
        );
      })}
      <MobileFloatingFilter />
    </MobileBottomLayout>
  );
}

const MobileBottomLayout = styled.section`
  display: none;

  @media screen and (max-width: 1024px) {
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    padding: 15px 10px 9px;
  }
`;

const BarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  gap: 10px;

  cursor: pointer;

  .icon,
  .item_title {
    color: #ffffff;
  }

  .icon {
    width: 26px;
    height: 26px;
  }

  .item_title {
    font-size: 10px;
  }
`;

export default MobileBottomBar;

type Constant = {
  [key: string]: string[];
};

const HEADER: Constant = {
  MENU_LIST: [
    "올림픽 미리보기",
    "아울렛",
    "브랜드",
    "여성",
    "남성",
    "골프",
    "아웃도어 & 스포츠",
  ],
  GROUP_LIST: ["런칭", "베스트", "스타일", "기획전", "이벤트"],
};

const SIDEBAR: Constant = {
  CATEGORY_LIST: [
    "전체",
    "집업",
    "긴팔",
    "반팔",
    "민소매",
    "긴팔이너",
    "반팔이너",
    "셔츠",
  ],
  FILTER_LIST: ["브랜드", "시즌", "추천", "색상", "혜택", "가격", "할인율"],
};

export { HEADER, SIDEBAR };

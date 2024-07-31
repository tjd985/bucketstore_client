const MENU_LIST = [
  "올림픽 미리보기",
  "아울렛",
  "브랜드",
  "여성",
  "남성",
  "골프",
  "아웃도어 & 스포츠",
] as const;
const GROUP_LIST = ["런칭", "베스트", "스타일", "기획전", "이벤트"] as const;
const CATEGORY_LIST = [
  "전체",
  "집업",
  "긴팔",
  "반팔",
  "민소매",
  "긴팔이너",
  "반팔이너",
  "셔츠",
] as const;
const FILTER_LIST = [
  "브랜드",
  "시즌",
  "추천",
  "색상",
  "혜택",
  "가격",
  "할인율",
] as const;
const SERVER_URI = "http://localhost:3000";
const ERROR_MESSAGE = "네트워크 오류가 발생하였습니다.";
const SORTING_LIST_KR = [
  "최신순",
  "낮은 가격순",
  "높은 가격순",
  "할인율 높은순",
  "판매 인기순",
] as const;
const SORTING_LIST_EN = [
  "newest",
  "low_pridce",
  "high_price",
  "high_discount_rate",
  "best",
] as const;
const SORTING_MAP = {
  최신순: "newest",
  "낮은 가격순": "low_price",
  "높은 가격순": "high_price",
  "할인율 높은순": "high_discount_rate",
  "판매 인기순": "best",
};
const SCROLL_REQUEST_POINT = 100;

export {
  MENU_LIST,
  GROUP_LIST,
  CATEGORY_LIST,
  FILTER_LIST,
  SERVER_URI,
  ERROR_MESSAGE,
  SORTING_LIST_KR,
  SORTING_LIST_EN,
  SORTING_MAP,
  SCROLL_REQUEST_POINT,
};

import {
  MENU_LIST,
  GROUP_LIST,
  CATEGORY_LIST,
  FILTER_LIST,
  SORTING_LIST_KR,
  SORTING_LIST_EN,
} from "../constants/constants.ts";

type MenuType = (typeof MENU_LIST)[number];
type GroupType = (typeof GROUP_LIST)[number];
type CategoryType = (typeof CATEGORY_LIST)[number];
type FilterType = (typeof FILTER_LIST)[number];
type SortingTypeKR = (typeof SORTING_LIST_KR)[number];
type SortingTypeEN = (typeof SORTING_LIST_EN)[number];

export type {
  MenuType,
  GroupType,
  CategoryType,
  FilterType,
  SortingTypeKR,
  SortingTypeEN,
};

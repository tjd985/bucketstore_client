import {
  MENU_LIST,
  GROUP_LIST,
  CATEGORY_LIST,
  FILTER_LIST,
  SORTING_LIST,
} from "../constants/constants.ts";

type MenuType = (typeof MENU_LIST)[number];
type GroupType = (typeof GROUP_LIST)[number];
type CategoryType = (typeof CATEGORY_LIST)[number];
type FilterType = (typeof FILTER_LIST)[number];
type SortingType = (typeof SORTING_LIST)[number];

export type { MenuType, GroupType, CategoryType, FilterType, SortingType };

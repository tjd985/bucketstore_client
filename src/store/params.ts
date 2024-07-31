import { create } from "zustand";

import { SortingTypeKR } from "../types/Constant.ts";

type ParamsStore = {
  type: SortingTypeKR;
  page: number;
  setType: (type: SortingTypeKR) => void;
  increasePage: () => void;
  clearPage: () => void;
};

const useParamsStore = create<ParamsStore>()(set => ({
  type: "최신순",
  page: 1,
  setType: type =>
    set(state => {
      state.type = type;

      return { ...state };
    }),
  increasePage: () =>
    set(state => {
      state.page += 1;

      return { ...state };
    }),
  clearPage: () =>
    set(state => {
      state.page = 1;

      return { ...state };
    }),
}));

export default useParamsStore;

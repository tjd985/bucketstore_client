import { create } from "zustand";

type ScrollDirection = "UP" | "DOWN";

type ScrollStore = {
  scroll: ScrollDirection;
  setScrollDirection: (direction: ScrollDirection) => void;
};

const useScrollStore = create<ScrollStore>()(set => ({
  scroll: "UP",
  setScrollDirection: direction =>
    set(state => {
      state.scroll = direction;

      return { ...state };
    }),
}));

export default useScrollStore;

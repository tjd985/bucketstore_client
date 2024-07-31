import { create } from "zustand";

import ProductType from "../types/Product.ts";
import { Meta } from "../types/APIresult.ts";

type Information = {
  meta: Meta;
  body: ProductType[];
};

type Products = {
  totalLength: number;
  productList: ProductType[];
};

type ProductsStore = {
  products: Products;
  setNestedProducts: (information: Information) => void;
  setNewProducts: (information: Information) => void;
  clearProducts: () => void;
};

const useProductsStore = create<ProductsStore>()(set => ({
  products: { totalLength: 0, productList: [] },
  setNestedProducts: information =>
    set(state => {
      const { meta, body } = information;

      state.products.totalLength = meta.pageInfo.total;
      state.products.productList = [...state.products.productList, ...body];

      return { ...state };
    }),
  setNewProducts: information =>
    set(state => {
      const { meta, body } = information;

      state.products.totalLength = meta.pageInfo.total;
      state.products.productList = body;

      return { ...state };
    }),
  clearProducts: () =>
    set(state => {
      state.products = { totalLength: 0, productList: [] };

      return { ...state };
    }),
}));

export default useProductsStore;

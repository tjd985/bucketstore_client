import { create } from "zustand";

import isOwnProperty from "../utils/isOwnProperty.ts";

import { ProductType, Badge } from "../types/Product.ts";
import { Meta } from "../types/APIresult.ts";
import CustomProduct from "../types/CustomProduct.ts";

type Information = {
  meta: Meta;
  body: ProductType[];
};

type Products = {
  totalLength: number;
  productList: CustomProduct[];
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

      const newProductList = body.map(product => {
        const { url, name, price, code, badges } = product;
        const { real, tag } = price;

        const newProduct: CustomProduct = {
          imagePath: url,
          name,
          code,
          tagPrice: tag,
          realPrice: real,
          badgeNameList: [],
        };

        if (!badges) {
          return newProduct;
        }

        for (const badgeType in badges) {
          if (isOwnProperty(badges, badgeType)) {
            const currentBadge = badges[badgeType as keyof typeof badges];

            if (!currentBadge.length) {
              continue;
            }

            newProduct.badgeNameList.push(currentBadge[0].name);
          }
        }

        return newProduct;
      });

      state.products.totalLength = meta.pageInfo.total;
      state.products.productList = [
        ...state.products.productList,
        ...newProductList,
      ];

      return { ...state };
    }),
  setNewProducts: information =>
    set(state => {
      const { meta, body } = information;

      const newProductList = body.map(product => {
        const { url, name, price, code, badges } = product;
        const { real, tag } = price;

        const newProduct: CustomProduct = {
          imagePath: url,
          name,
          code,
          tagPrice: tag,
          realPrice: real,
          badgeNameList: [],
        };

        if (!badges) {
          return newProduct;
        }

        for (const badgeType in badges) {
          if (isOwnProperty(badges, badgeType)) {
            const currentBadge = badges[
              badgeType as keyof typeof badges
            ] as Badge[];

            if (!currentBadge.length) {
              continue;
            }

            newProduct.badgeNameList.push(currentBadge[0].name);
          }
        }

        return newProduct;
      });

      state.products.totalLength = meta.pageInfo.total;
      state.products.productList = newProductList;

      return { ...state };
    }),
  clearProducts: () =>
    set(state => {
      state.products = { totalLength: 0, productList: [] };

      return { ...state };
    }),
}));

export default useProductsStore;

import { useState, useEffect } from "react";

import { SERVER_URI, ERROR_MESSAGE } from "../constants/constants.ts";

import ProductType from "../types/Product.ts";
import APIresult from "../types/APIresult.ts";

type ProductInformation = {
  totalLength: number;
  products: ProductType[];
};

function useProductData(
  type: string,
  page: number,
): [ProductInformation, string, boolean, boolean] {
  const [productInformation, setProductInformation] =
    useState<ProductInformation>({ totalLength: 0, products: [] });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(
        `${SERVER_URI}/products/type/${type}/page/${page}`,
        {
          method: "GET",
        },
      );
      const result: APIresult = await response.json();

      if (result.status !== "200") {
        if (!result.message) {
          return;
        }

        setIsError(true);
        setErrorMessage(result.message);
      }

      if (!result.content) {
        return;
      }

      const { meta, body } = result.content;

      setProductInformation({
        totalLength: meta.pageInfo.total,
        products: body,
      });
      setIsLoading(false);
    }

    try {
      fetchProduct();
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(ERROR_MESSAGE);
    }
  }, [type, page]);

  return [productInformation, errorMessage, isLoading, isError];
}

export default useProductData;

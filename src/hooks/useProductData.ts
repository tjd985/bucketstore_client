import { useState, useEffect } from "react";

import { SERVER_URI, ERROR_MESSAGE } from "../constants/constants.ts";

import Badge from "../types/Product.ts";

function useProductData(type: string, page: number) {
  const [products, setProducts] = useState<Badge[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(
        `${SERVER_URI}/products/type/${type}/page/${page}`,
        {
          method: "GET",
        },
      );
      const result = await response.json();

      if (result.status !== "200") {
        setIsError(true);
        setErrorMessage(result.messge);
      }

      setProducts(result.content.body);
    }

    try {
      setIsLoading(true);
      setIsError(false);

      fetchProduct();

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage(ERROR_MESSAGE);
    }
  }, [type, page]);

  return [products, errorMessage, isLoading, isError];
}

export default useProductData;

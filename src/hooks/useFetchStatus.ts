import { useState, useEffect } from "react";

import useProductsStore from "../store/products.ts";

import {
  SERVER_URI,
  ERROR_MESSAGE,
  SORTING_MAP,
  TOAST_TIME,
} from "../constants/constants.ts";

import { APIresult } from "../types/APIresult.ts";
import { SortingTypeKR, SortingTypeEN } from "../types/Constant.ts";

function useFetchStatus(
  type: SortingTypeKR,
  page: number,
): [boolean, boolean, string] {
  const { setNestedProducts, setNewProducts } = useProductsStore();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      setIsError(false);

      const sortingType = SORTING_MAP[type] as SortingTypeEN;
      const response = await fetch(
        `${SERVER_URI}/products/type/${sortingType}/page/${page}`,
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

      if (page === 1) {
        setNewProducts(result.content);
      } else {
        setNestedProducts(result.content);
      }

      setIsLoading(false);
    }

    try {
      fetchProduct();
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(ERROR_MESSAGE);
    }
  }, [type, page]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (isError) {
      timer = setTimeout(() => {
        setIsError(false);
      }, TOAST_TIME);
    }

    return () => {
      if (!timer) {
        return;
      }

      clearTimeout(timer);
    };
  }, [isError]);

  return [isLoading, isError, errorMessage];
}

export default useFetchStatus;

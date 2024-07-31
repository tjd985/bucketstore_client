import { useState, useEffect } from "react";

import useProductsStore from "../store/products.ts";

import {
  SERVER_URI,
  ERROR_MESSAGE,
  SORTING_MAP,
} from "../constants/constants.ts";

import { APIresult } from "../types/APIresult.ts";
import { SortingTypeKR, SortingTypeEN } from "../types/Constant.ts";

function useFetchStatus(type: SortingTypeKR, page: number): [boolean, string] {
  const { setNestedProducts, setNewProducts } = useProductsStore();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
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
    }

    try {
      fetchProduct();
    } catch (err) {
      setIsError(true);
      setErrorMessage(ERROR_MESSAGE);
    }
  }, [type, page]);

  return [isError, errorMessage];
}

export default useFetchStatus;

import { useState, useEffect } from "react";
import { throttle } from "lodash";

import useParamsStore from "../store/params.ts";

import { SCROLL_REQUEST_POINT } from "../constants/constants.ts";

function useScroll() {
  const [canRequest, setCanRequest] = useState<boolean>(false);
  const { increasePage } = useParamsStore();

  function calculateEnd() {
    if (
      window.innerHeight + window.scrollY + SCROLL_REQUEST_POINT >=
      document.body.offsetHeight
    ) {
      setCanRequest(true);
    }

    return false;
  }

  useEffect(() => {
    const throttledCaclulateEnd = throttle(calculateEnd, 1000);

    window.addEventListener("scroll", throttledCaclulateEnd);

    return window.removeEventListener("scorll", throttledCaclulateEnd);
  }, []);

  useEffect(() => {
    if (canRequest) {
      increasePage();
      setCanRequest(false);
    }
  }, [canRequest]);
}

export default useScroll;

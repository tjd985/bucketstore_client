import { useState, useEffect } from "react";
import { throttle } from "lodash";

import useParamsStore from "../store/params.ts";
import useScrollStore from "../store/scroll.ts";

import { SCROLL_REQUEST_POINT, THROTTLE_TIME } from "../constants/constants.ts";

function useScroll() {
  const [canRequest, setCanRequest] = useState<boolean>(false);
  const [beforeScroll, setBeforeScroll] = useState<number>(0);
  const { increasePage } = useParamsStore();
  const { setScrollDirection } = useScrollStore();

  function calculateEnd() {
    if (canRequest) {
      return;
    }

    if (
      window.innerHeight + window.scrollY + SCROLL_REQUEST_POINT >=
      document.body.offsetHeight
    ) {
      setCanRequest(true);
    }
  }

  function getScrollDirection() {
    if (beforeScroll < window.scrollY) {
      setScrollDirection("DOWN");
    } else {
      setScrollDirection("UP");
    }

    setBeforeScroll(window.scrollY);
  }

  useEffect(() => {
    const throttledCaclulateEnd = throttle(calculateEnd, THROTTLE_TIME);

    window.addEventListener("scroll", throttledCaclulateEnd);

    return () => {
      window.removeEventListener("scroll", throttledCaclulateEnd);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", getScrollDirection);

    return () => {
      window.removeEventListener("scroll", getScrollDirection);
    };
  }, [beforeScroll]);

  useEffect(() => {
    if (canRequest) {
      increasePage();
      setCanRequest(false);
    }
  }, [canRequest]);
}

export default useScroll;

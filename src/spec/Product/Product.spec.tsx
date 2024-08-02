import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Product from "../../components/Product/Product.tsx";

import useProductsStore from "../../store/products.ts";

const MOCK_DATA = {
  meta: {
    checkSum: null,
    pageInfo: {
      page: 1,
      size: 12,
      total: 5968,
      pages: 498,
    },
  },
  body: [
    {
      code: "CRS0000063497",
      name: "컬러라인 코튼 반팔 티셔츠(블랙)_L4B1-TS06C",
      statusCode: "G008_90",
      brandName: "LIKK",
      brandId: 961,
      price: {
        tag: 86000,
        real: 59000,
        discountRate: 31,
        maxDiscountPrice: 59000,
        maxDiscountRate: 31,
      },
      url: "https://cdn.bucketstore.com/goods/extmall//SC00072/CRS0000063497_01.jpeg",
      isFavorite: false,
      isSoldOut: false,
      deliveryFeeCode: "SC00072_01",
      badges: null,
    },
  ],
};

beforeEach(() => {
  const { setNewProducts } = useProductsStore.getState();

  setNewProducts(MOCK_DATA);

  vi.mock("../../hooks/useFetchStatus.ts", () => ({
    default: () => [false, false, ""],
  }));

  render(<Product />);
});

describe("Product 컴포넌트 테스트", () => {
  it("화면에 '컬러라인 코튼 반팔 티셔츠(블랙)_L4B1-TS06C' 이라는 글자가 렌더링 되어야 합니다.", () => {
    const cardTitleEl = screen.getByText(
      "컬러라인 코튼 반팔 티셔츠(블랙)_L4B1-TS06C",
    );
    const cardRealPriceEl = screen.getByText("59,000");
    const cardTagPriceEl = screen.getByText("86,000");

    expect(cardTitleEl).toBeInTheDocument();
    expect(cardRealPriceEl).toBeInTheDocument();
    expect(cardTagPriceEl).toBeInTheDocument();
  });
});

type Price = {
  tag: number;
  real: number;
  discountRate: number;
  maxDiscountPrice: number;
  maxDiscountRate: number;
};

type Badge = {
  goodsCode: string;
  id: number;
  type: string;
  name: string;
  inOrder: number;
  isAuto: boolean;
};

type ProductType = {
  code: string;
  name: string;
  statusCode: string;
  brandName: string;
  brandId: number;
  price: Price;
  url: string;
  isFavorite: boolean;
  isSoldOut: boolean;
  deliveryFeeCode: string;
  badges: {
    custom: Badge[];
    attribute: Badge[];
    recommend: Badge[];
  } | null;
};

export type { ProductType, Badge };

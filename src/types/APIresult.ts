import { ProductType } from "./Product.ts";

type Meta = {
  checkSum: number | null;
  pageInfo: {
    page: number;
    pages: number;
    size: number;
    total: number;
  };
};

type APIresult = {
  result: string;
  status: string;
  content?: {
    meta: Meta;
    body: ProductType[];
  };
  message?: string;
};

export type { APIresult, Meta };

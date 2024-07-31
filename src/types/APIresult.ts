import Product from "./Product.ts";

type Meta = {
  checksum: number | null;
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
    body: Product[];
  };
  message?: string;
};

export type { APIresult, Meta };

import Badge from "./Product.ts";

type APIresult = {
  result: string;
  status: string;
  content?: { body: Badge[] };
  message?: string;
};

export default APIresult;

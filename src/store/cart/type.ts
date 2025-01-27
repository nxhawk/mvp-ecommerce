import { IProduct } from "@/types/product";

export interface IProductCart {
  product: IProduct;
  quantity: number;
}

export interface ICart {
  products: IProductCart[];
  totalProduct: number;
}

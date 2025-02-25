// fetch products

import { IProductInput } from "@/types";
import { getAllProducts } from "./actions/products.actions";

export async function fetchClothes(): Promise<IProductInput[]> {
  return await getAllProducts("page=1&limit=3");
}

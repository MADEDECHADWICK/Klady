// fetchClothes.ts

import { getAllClothes } from "@/app/actions";
import { Clothes } from "@/app/data";


export async function fetchClothes(): Promise<Clothes[]> {
  return await getAllClothes("page=1&limit=3");
}

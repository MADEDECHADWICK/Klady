import { ProductInputSchema } from "@/lib/validation";
import { z } from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>

export type Data = {
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
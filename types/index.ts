import { ProductInputSchema, SettingInputSchema, SiteCurrencySchema } from "@/lib/validation";
import { z } from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>

export type Data = {
  products: IProductInput[]
  settings: ISettingInput[]
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
export type ISettingInput = z.infer<typeof SettingInputSchema>
export type ClientSetting = ISettingInput & {
  currency: string
}
export type SiteCurrency = z.infer<typeof SiteCurrencySchema>


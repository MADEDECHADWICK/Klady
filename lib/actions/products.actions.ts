"use server";

import { IProductInput, products } from "@/lib/data"; // Updated import
import Product, { IProduct } from "../db/models/product.model";
import { connectToDatabase } from "../db";

// Get all products
export const getAllProducts = async (query: string): Promise<IProductInput[]> => {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams(query);
    const page = parseInt(urlParams.get("page") || "1", 10);
    const limit = parseInt(urlParams.get("limit") || "3", 10);

    const startIndex = (page - 1) * limit;
    const result = products.slice(startIndex, startIndex + limit);
    resolve(result); // Resolve the promise with the result
  });
};

// Get a single product by ID
export const getProductById = async (id: number): Promise<IProductInput | undefined> => {
  return products.find((product) => product.id === id);
};

// Add a new product
export const addProduct = async (newProduct: IProductInput): Promise<void> => {
  products.push(newProduct);
};

// Update an existing product
export const updateProduct = async (
  id: number,
  updatedProduct: Partial<IProductInput>
): Promise<boolean> => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return true;
  }
  return false;
};

// Delete a product by ID
export const deleteProduct = async (id: number): Promise<boolean> => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
};

// Get products by tag
export async function getProductsByTag({
  tag,
  limit = 10,
}: {
  tag: string;
  limit?: number;
}): Promise<IProduct[]> {
  await connectToDatabase();
  const products = await Product.find({
    tags: { $in: [tag] },
    isPublished: true,
  })
    .sort({ createdAt: "desc" })
    .limit(limit);
  return JSON.parse(JSON.stringify(products)) as IProduct[];
}
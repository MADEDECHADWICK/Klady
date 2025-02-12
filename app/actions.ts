"use server";
import { Clothes, clothesData } from "./data";
import { z } from "zod";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";

// Get all clothes
export const getAllClothes = async(query: string): Promise<Clothes[]> => {
  return new Promise((resolve) => {
    const urlParams = new URLSearchParams(query);
    const page = parseInt(urlParams.get("page") || "1", 10);
    const limit = parseInt(urlParams.get("limit") || "3", 10);

    const startIndex = (page - 1) * limit;
    const result = clothesData.slice(startIndex, startIndex + limit);
    resolve(result); // Resolve the promise with the result
  });
};

// Get a single clothing item by ID
export const getClothesById = async(id: number): Promise<Clothes | undefined> => {
  return clothesData.find((clothing) => clothing.id === id);
};

// Add a new clothing item
export const addClothes = async(newClothing: Clothes): Promise<void> => {
  clothesData.push(newClothing);
};

// Update an existing clothing item
export const updateClothes = async(id: number, updatedClothing: Partial<Clothes>): Promise<boolean> => {
  const index = clothesData.findIndex((clothing) => clothing.id === id);
  if (index !== -1) {
    clothesData[index] = { ...clothesData[index], ...updatedClothing };
    return true;
  }
  return false;
};

// Delete a clothing item by ID
export const deleteClothes = async (id: number): Promise<boolean> => {
  const index = clothesData.findIndex((clothing) => clothing.id === id);
  if (index !== -1) {
    clothesData.splice(index, 1);
    return true;
  }
  return false;
};



const testUser = {
  id: "1",
  email: "madas@gmail.com",
  password: "12345678",
};

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(testUser.id);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}

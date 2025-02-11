import { Clothes, clothesData } from "./data";


// Get all clothes
export const getAllClothes = (query: string): Promise<Clothes[]> => {
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
export const getClothesById = (id: number): Clothes | undefined => {
  return clothesData.find((clothing) => clothing.id === id);
};

// Add a new clothing item
export const addClothes = (newClothing: Clothes): void => {
  clothesData.push(newClothing);
};

// Update an existing clothing item
export const updateClothes = (id: number, updatedClothing: Partial<Clothes>): boolean => {
  const index = clothesData.findIndex((clothing) => clothing.id === id);
  if (index !== -1) {
    clothesData[index] = { ...clothesData[index], ...updatedClothing };
    return true;
  }
  return false;
};

// Delete a clothing item by ID
export const deleteClothes = (id: number): boolean => {
  const index = clothesData.findIndex((clothing) => clothing.id === id);
  if (index !== -1) {
    clothesData.splice(index, 1);
    return true;
  }
  return false;
};

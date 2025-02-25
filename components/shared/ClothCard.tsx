import { IProductInput } from "@/types";
import React from "react";
import Image from "next/image";

interface ClothCardProps {
  cloth: IProductInput; // Change to IProductInput to match the products data structure
}

const ClothCard: React.FC<ClothCardProps> = ({ cloth }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-48">
      <Image 
        src={cloth.images[0]} // Access the first image in the images array
        alt={cloth.name} 
        height={100} 
        width={100} 
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{cloth.name}</h2>
      <p className="text-sm text-gray-600">{cloth.description}</p>
      <p className="text-yellow-500 font-semibold">Ratings: {cloth.avgRating} ⭐</p>
      <p className="text-gray-500 font-semibold">Price: ${cloth.price}</p>
    </div>
  );
};

export default ClothCard;
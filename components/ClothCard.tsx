import { Clothes } from "@/app/data";
import React from "react";
import Image from "next/image"

interface ClothCardProps {
  cloth: Clothes;
}

const ClothCard: React.FC<ClothCardProps> = ({ cloth }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-48">
      <Image src={cloth.image} alt={cloth.name} height={100} width={100}className="w-full h-40 object-cover rounded-md"/>
      <h2 className="text-lg font-bold mt-2">{cloth.name}</h2>
      <p className="text-sm text-gray-600">{cloth.description}</p>
      <p className="text-yellow-500 font-semibold">Ratings: {cloth.ratings} ⭐</p>
    </div>
  );
};

export default ClothCard;

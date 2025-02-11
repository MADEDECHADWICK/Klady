"use client"
import Aspect from "@/components/AspectRatio";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { Clothes } from "./data";
import { getAllClothes } from "./actions";
import ClothCard from "@/components/ClothCard";
import LoadMore from "@/components/LoadMore";
import { useEffect, useState } from "react";

export default function Home() {
  const [clothes, setClothes] = useState<Clothes[]>([]);

  // Fetch initial data when the component mounts
  useEffect(() => {
    const fetchClothes = async () => {
      const data = await getAllClothes("page=1&limit=3");
      setClothes(data);
    };

    fetchClothes();
  }, []);

  return (
    <div className="flex">
      {/* Left Side Component */}
      <LeftSide />

      {/* Middle Section */}
      <div className="flex-1 flex flex-col px-4 py-2">
        {/* Aspect Ratio Component */}
        <div className="py-4">
          <Aspect />
        </div>

        {/* Cloth Cards */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {clothes.map((cloth) => (
            <ClothCard key={cloth.id} cloth={cloth} />
          ))}
        </section>
        <LoadMore/>
      </div>

      {/* Right Side Component */}
      <div className="px-4 py-2">
        <RightSide />
      </div>
    </div>
  );
}
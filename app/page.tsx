//"use client"


import Aspect from "@/components/shared/AspectRatio";
import ClothCard from "@/components/shared/ClothCard";
import LoadMore from "@/components/shared/LoadMore";
import LeftSide from "@/components/structure/LeftSide";
import RightSide from "@/components/structure/RightSide";
import { fetchClothes } from "@/lib/FetchClothe";


export default async function Home() {
  const clothes = await fetchClothes();

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
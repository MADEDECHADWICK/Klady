"use client"
import { getAllClothes } from "@/app/actions";
import { Clothes } from "@/app/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import {useInView } from "react-intersection-observer"
import ClothCard from "./ClothCard";

function LoadMore() {
  const {ref,inView} = useInView();
  const [data, setData] = useState<Clothes[]>([]);
  const [page, setPage] = useState(2);

  useEffect(() =>{
    if(inView){
        getAllClothes(`page=${page}&limit=3`).then((res) => {
        setData((prevData) => [...prevData, ...res]); // Append new data to existing data
        setPage((prevPage) => prevPage + 1); // Increment the page for the next fetch
      });
    }
  },[inView, data, page])
  return (
    <>
     <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((cloth) => (
            <ClothCard key={cloth.id} cloth={cloth} />
          ))}
        </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;

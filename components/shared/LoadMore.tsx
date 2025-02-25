"use client"


import Image from "next/image";
import { useEffect, useState } from "react";
import {useInView } from "react-intersection-observer"
import ClothCard from "./ClothCard";
import { getAllProducts } from "@/lib/actions/products.actions";
import { IProductInput } from "@/types";

function LoadMore() {
  const {ref,inView} = useInView();
  const [data, setData] = useState<IProductInput[]>([]);
  const [page, setPage] = useState(2);

  useEffect(() =>{
    if(inView){
        getAllProducts(`page=${page}&limit=3`).then((res) => {
        setData((prevData) => [...prevData, ...res]); // Append new data to existing data
        setPage((prevPage) => prevPage + 1); // Increment the page for the next fetch
      });
    }
  },[inView, data, page])
  return (
    <>
     <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((cloth) => (
            <ClothCard key={cloth.slug} cloth={cloth} />
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

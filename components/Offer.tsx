"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Offer = () => {
  const autoplayRef = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full" // Ensure it takes full height
      plugins={[autoplayRef.current]}
    >
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image
            src="/images/Advert.jpg"
            alt="women"
            layout="fill" // Use fill to cover the aspect ratio
            objectFit="cover" // Maintain aspect ratio
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image
            src="/images/Advert1.jpeg"
            alt="women"
            layout="fill" // Use fill to cover the aspect ratio
            objectFit="cover" // Maintain aspect ratio
          />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center h-full">
          <Image
            src="/images/Adver2.jpeg"
            alt="women"
            layout="fill" // Use fill to cover the aspect ratio
            objectFit="cover" // Maintain aspect ratio
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Offer;
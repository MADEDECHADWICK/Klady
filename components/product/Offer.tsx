"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import MyImage from "../shared/MyImage";

const Offer = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 2000 }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    // Cleanup the event listener on component unmount
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-[600px] h-[200px]"
      plugins={[autoplayRef.current]}
    >
      <CarouselContent>
        <CarouselItem className="flex justify-center items-center basis-1/3 ">
             <MyImage src="/images/Advert.jpg" alt="" height={150} width={150} className="object-cover"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3">
             <MyImage src="/images/Advert4.jpeg" alt="" height={150} width={150} className="object-cover"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3">
            <MyImage src="/images/Advert3.jpeg" alt="" height={150} width={150} className="object-cover"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3">
            <MyImage src="/images/Advert5.jpeg" alt="" height={150} width={150} className="object-cover"/>
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center basis-1/3">
            <MyImage src="/images/Advert6.jpeg" alt="" height={150} width={150} className="object-cover"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Offer;
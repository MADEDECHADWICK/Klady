import { IProductInput } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

import { formatNumber, round2, generateId } from "@/lib/utils";
import ImageHover from "./image-hover";
import Rating from "../product/ratings";
import ProductPrice from "../product/product-price";

interface ClothCardProps {
  cloth: IProductInput;
  hideBorder?: boolean;
  hideDetails?: boolean;
}

const ClothCard: React.FC<ClothCardProps> = ({
  cloth,
  hideBorder = false,
  hideDetails = false,
}) => {
  const ClothImage = () => (
    <Link href={`/product/${cloth.slug}`}>
      <div className='relative h-52'>
        {cloth.images.length > 1 ? (
          <ImageHover
            src={cloth.images[0]}
            hoverSrc={cloth.images[1]}
            alt={cloth.name}
          />
        ) : (
          <div className='relative h-52'>
            <Image
              src={cloth.images[0]}
              alt={cloth.name}
              fill
              sizes='80vw'
              className='object-contain'
            />
          </div>
        )}
      </div>
    </Link>
  );

  const ClothDetails = () => (
    <div className='flex-1 space-y-2'>
      <p className='font-bold'>{cloth.brand}</p>
      <Link
        href={`/product/${cloth.slug}`}
        className='overflow-hidden text-ellipsis'
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {cloth.name}
      </Link>
      <div className='flex gap-2 justify-center'>
        <Rating rating={cloth.avgRating} />
        <span>({formatNumber(cloth.numReviews)})</span>
      </div>
      <ProductPrice
        isDeal={cloth.tags?.includes('todays-deal')}
        price={cloth.price}
        listPrice={cloth.listPrice}
        forListing
      />
    </div>
  );

  return hideBorder ? (
    <div className='flex flex-col'>
      <ClothImage />
      {!hideDetails && (
        <div className='p-3 flex-1 text-center'>
          <ClothDetails />
        </div>
      )}
    </div>
  ) : (
    <Card className='flex flex-col'>
      <CardHeader className='p-3'>
        <ClothImage />
      </CardHeader>
      {!hideDetails && (
        <CardContent className='p-3 flex-1 text-center'>
          <ClothDetails />
        </CardContent>
      )}
    </Card>
  );
};

export default ClothCard;
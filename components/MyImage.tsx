import React from 'react';
import Image from 'next/image';

interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const MyImage: React.FC<MyImageProps> = ({ src, alt, width, height, className }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default MyImage;
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type CarouselProps = {
  images: any[];
};

export default function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, updateCurrentImageIndex] = useState<number>(0);
  const updateImageIndex = useCallback(
    (index: 1 | -1) => {
      const newIndex = currentImageIndex + index;
      const length = images.length;
      if (newIndex < 0) updateCurrentImageIndex(length - 1);
      else if (newIndex >= length) updateCurrentImageIndex(0);
      else updateCurrentImageIndex(newIndex);
    },
    [currentImageIndex, updateCurrentImageIndex, images]
  );

  let timeout = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (!images) return;
    timeout.current = setTimeout(() => {
      updateImageIndex(1);
    }, 3000);
    return () => {
      timeout.current && clearTimeout(timeout.current!);
    };
  }, [updateImageIndex, images]);
  return (
    <div className="w-[600px] flex flex-row items-center space-between flex-grow-0">
      <Image
        src={images[currentImageIndex]}
        alt="listing-image"
        width="600"
        height="600"
        className="rounded-md"
      />
    </div>
  );
}

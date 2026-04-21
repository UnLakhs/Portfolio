"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

const IMAGES_PER_VIEW = 3;

const ProjectCarousel = ({ images, title }: ProjectCarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex((prev) =>
      prev + IMAGES_PER_VIEW >= images.length ? 0 : prev + IMAGES_PER_VIEW
    );
  };

  const prevImages = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        const remainder = images.length % IMAGES_PER_VIEW;
        if (remainder === 0) {
          return images.length - IMAGES_PER_VIEW;
        }
        return images.length - remainder;
      }
      return prev - IMAGES_PER_VIEW;
    });
  };

  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_VIEW);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-3/2 overflow-hidden rounded-xl border border-foreground/10"
          >
            <Image
              src={image}
              alt={`${title} screenshot ${startIndex + index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > IMAGES_PER_VIEW && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={prevImages}
            className="rounded-lg border border-foreground/10 px-4 py-2 text-sm text-foreground/80 transition hover:bg-foreground/5"
          >
            ← Previous
          </button>

          <span className="text-sm text-foreground/60">
            {Math.floor(startIndex / IMAGES_PER_VIEW) + 1} /{" "}
            {Math.ceil(images.length / IMAGES_PER_VIEW)}
          </span>

          <button
            type="button"
            onClick={nextImages}
            className="rounded-lg border border-foreground/10 px-4 py-2 text-sm text-foreground/80 transition hover:bg-foreground/5"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
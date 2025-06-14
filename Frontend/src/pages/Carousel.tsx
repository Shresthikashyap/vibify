import * as React from "react";

import { Card, CardContent } from "../components/HomeContent/SongCarousel/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/HomeContent/SongCarousel/carousel";
// checking the pull

export default function CarouselSpacing() {
  return (
    <div className="ml-9">
      <div className="flex justify-start items-start">
        <Carousel className="w-full max-w-xs">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src="https://st3.depositphotos.com/14847044/19141/i/450/depositphotos_191413466-stock-photo-sunset.jpg"
                        className=""
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

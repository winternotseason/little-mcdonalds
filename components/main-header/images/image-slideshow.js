"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import burgerImg from "@/assets/gradient1.jpeg";
import curryImg from "@/assets/gradient2.jpeg";
import dumplingsImg from "@/assets/gradient3.jpeg";
import macncheeseImg from "@/assets/gradient4.jpeg";
import schnitzelImg from "@/assets/gradient5.jpeg";
import tomatoSaladImg from "@/assets/gradient6.jpeg";
import pizzaImg from "@/assets/gradient7.jpeg";

import classes from "./image-slideshow.module.css";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // 타이머 ID가 interval
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000); // 렌더링 될 때마다 실행됨

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

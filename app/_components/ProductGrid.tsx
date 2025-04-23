import React from "react";
import ProductItem from "./ProductItem";

export default function ProductGrid() {
  const products = [
    {
      imageSrc: "/bucket-hat.jpg",
      altText: "Man wearing a sports bucket hat",
      title: "Bucket hat",
      price: 12.0,
      rating: 4.9,
    },
    {
      imageSrc: "/white-sneakers.jpg",
      altText: "Pair of white sneakers",
      title: "White sneakers",
      price: 32.0,
      rating: 4.7,
    },
    {
      imageSrc: "/hoodie.jpg",
      altText: "Close-up of a teddy hoodie",
      title: "Teddy hoodie",
      price: 28.0,
      rating: 4.8,
    },
    {
      imageSrc: "/sweatpants.jpg",
      altText: "Person wearing fleece sweatpants",
      title: "Sweatpants",
      price: 35.0,
      rating: 4.9,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-20">
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
}

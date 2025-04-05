import React from "react";
import ProductItem from "./ProductItem";

export default function ProductGrid() {
  const products = [
    {
      imageSrc: "/images/bucket-hat.jpg",
      altText: "Man wearing a sports bucket hat",
      title: "Sports bucket hat",
      price: 12.0,
      rating: 4.9,
    },
    {
      imageSrc: "/images/white-sneakers.jpg",
      altText: "Pair of white sneakers",
      title: "White sneakers",
      price: 32.0,
      rating: 4.7,
    },
    {
      imageSrc: "/images/teddy-hoodie.jpg",
      altText: "Close-up of a teddy hoodie",
      title: "Teddy hoodie",
      price: 28.0,
      rating: 4.8,
    },
    {
      imageSrc: "/images/fleece-sweatpants.jpg",
      altText: "Person wearing fleece sweatpants",
      title: "Fleece sweatpants",
      price: 35.0,
      rating: 4.9,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
}

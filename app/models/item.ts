export interface ProductListingProps {
  readonly id?: number;
  image: string;
  altText: "image";
  title: string;
  price: number;
  rating: { rate: number; count: number };
}

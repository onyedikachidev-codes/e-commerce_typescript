export interface ProductListingProps {
  readonly id?: number;
  image: string;
  altText: "image";
  title: string;
  price: number;
  description?: string;
  category?: string;
  rating: { rate: number; count: number };
}

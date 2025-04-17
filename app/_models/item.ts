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

export interface LoginProps {
  email: string;
  password: string;
}

export interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
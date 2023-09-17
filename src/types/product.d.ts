import {StaticImageData} from 'next/image';

type Category = 'cat' | 'dog';
type Feature = 'antibacterial' | 'waterproof' | 'breathable';

type Discount = {
  discount_percentage: number;
  discount_start_date: string;
  discount_end_date: string;
};

type ProductSize = {
  size_id: number;
  size_name: string;
  size_price?: string;
  size_stock?: string;
  size_dimension?: string;
};

type ProductVariant = {
  variant_name: string;
  variant_color: string[];
  image: string | StaticImageData;
  sizes: ProductSize[];
};

type ProductType = {
  id: string;
  title: string;
  brief: string;
  description: string;
  category?: Category[];
  variants?: ProductVariant[];
  discount?: Discount;
  features?: Feature[];
};

export type {ProductType, ProductVariant, ProductSize, Category, Feature};

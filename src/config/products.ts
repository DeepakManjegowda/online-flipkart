type ProductsProps = {
  offer_percentage?: number;
  id: number;
  product_name: string;
  rating: string;
  reviews: number;
  price: number;
  original_price: number;
  category: string;
  img: string;
  logo: string;
  offers: string[];
  device_ram?: any;
  features?: any;
  quantity: number;
};

export default ProductsProps;

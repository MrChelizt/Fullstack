export type Product = {
  _id: string;
  name: string;
  castingTime: string;
  range: string;
  duration: string;
  components: string;
  price: number;
  details: string;
};

export type User = {
  _id: string;
  email: string;
};

export type CartRecord = {
  product: Product;
  count: number;
};

export type Product = {
  _id: string;
  name: string;
  image: string;
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

export type ProductOrder = Product & {
  quantity: number;
};

export type Order = {
  _id: string;
  userId: string;
  productList: ProductOrder[];
  createdAt: string;
};

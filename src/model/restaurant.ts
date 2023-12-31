export type Restaurant = {
  name: string;
  category: string;
  address: Address
  menu: Menu[]
}

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
}

export type Menu = {
  name: string;
  price: number;
  category: string;
}

// Omit을 이용해서 Address type의 zipCode빼기
export type AddressWithoutZip = Omit<Address, "zipCode">

// export type Address = {
//   city: string;
//   detail: string;
//   zipCode?: number; 
// }
//로도 사용 가능하지만 zipCode가 반드시 필요할때에는 사용하지 말것

// Pick을 이용해서 Restaurant type의 category만 가져오기
export type RestaurantOnlyCategory = Pick<Restaurant, "category">

//Api호출시
export type ApiResponse<T> = {
  data: T[],
  totalPage: number,
  page: number
}

export type RestaurantResponse = ApiResponse<Restaurant>

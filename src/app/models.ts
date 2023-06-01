export interface IUser {
  id: number;
  type: string;
  attributes: {
    firstName: string;
    lastName: string;
  };
}
export interface ITag {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface IReview {
  id: number;
  title: string;
  description: string;
  rating: number;
  user_id: number;
  shop_id: number;
  created_at: string;
  updated_at: string;
}
export interface IImage {
  id: number;
  url: string;
  shop_id: number;
  created_at: string;
  updated_at: string;
}

export interface IShop {
  type: string;
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    phoneNumber: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
    logoPhoto: string;
    coverPhoto: string;
    // latitude: number;
    // longitude: number;
    isEnabled: boolean;

    isApproved: boolean;
    approvedAt: string;

    createdAt: string;
    updatedAt: string | null;
  };
  relationships: any; //
  links: any;
}
export interface IPaginationMeta {
  currentPage: number;
  from: number;
  lastPage: number;
  perPage: number;
  to: number;
  total: number;
}

export interface IShopResponse {
  meta: {
    page: IPaginationMeta;
  };
  links: any;
  jsonapi: { version: string };
  data: IShop[];
  included: any;
}

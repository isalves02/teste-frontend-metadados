import { ReactNode } from "react"

export interface ProductCardProps {
  id: number,
  title: string,
  price: number,
  category: string,
  imageUrl: string,
  sale?: boolean,
}

export interface ProductDataProps {
  id: number,
  title: string,
  price: number,
  description: string,
  images: Array<string>,
  creationAt: string,
  updatedAt: string,
  category: CategoryProps,
}

export interface CategoryProps {
  id: number,
  name: string,
  image: string,  
  creationAt: string,
  updatedAt: string,
}

export interface ProductAddedToCartProps {
  id: number,
  title: string,
  price: number,
  discount: number,
  quantity: number,
  imageUrl: string,
}

export interface ProductsContextType {
  total: string,
  quantity: number,
  loading: boolean,
  productID: number,
  searchQuery: string,
  hasCartUpdated: boolean,
  categories: CategoryProps[],
  products: ProductDataProps[],
  singleProduct?: ProductDataProps,
  productsAddedToCart: ProductAddedToCartProps[],
  

  searchInputData: (query: string) => void,
  setHasCartUpdated: (state: boolean) => void,
  removeProductFromCart: (id: number) => void,
  filterByCategory: (categoryID: string) => void,
  handleProductAddedToCart: (productID: number) => void,
  selectedPriceRange: (min?: number, max?: number) => void,
  handleGetProductDescription: (productID: number) => void,
  handleUpdateQuantity: (productID: number, quantity: number) => void,
  handleSetQuantity: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number, quantity: number) => void
}

export interface ShoppingChildrenContext {
  children: ReactNode
}
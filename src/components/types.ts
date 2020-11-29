export type CatalogItemProps = {
  item: {
     price: string,
     image: string,
     title: string
  },
  onClick: () => void
}

export type Book = {
  image: string,
  isbn13: string,
  price: string,
  subtitle: string,
  title: string,
  url: string
}

export type Catalog = Book[]

export type CartElement = {
  qnt: string,
  price: string,
  id: number
}

export type Store = {
  cartReducer: {
    cart: CartElement[]
  }
}

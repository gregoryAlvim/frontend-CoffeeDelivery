interface Tag {
  id: number
  name: string
}

export interface Coffee {
  id: number
  title: string
  description: string
  price: number
  image: string
  tags: Tag[]
  amount: number
  total?: number | undefined
}

export interface Cart {
  id: number
  title: string
  amount: number
  price: number
  img: any
  total?: number | undefined
}

export type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export type CartItem = Guitar & {
  quantity: number
}

export type CartProps = {
  cart: CartItem[]
  removeFromCart: (itemId : CartItem['id']) => void
  decreaseQuantity: (itemId : CartItem['id']) => void
  increaseQuantity: (itemId : CartItem['id']) => void
  clearCart: () => void
  isEmptyCart: boolean
  totalPrice: number
}
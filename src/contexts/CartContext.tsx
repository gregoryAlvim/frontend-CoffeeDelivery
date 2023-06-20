import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { Cart, Coffee } from '../@types/mockes'
import { CART_KEY, cartReducer, initializer } from '../reducers/carts/reducers'
import {
  addNewItemAction,
  cleanItemAction,
  deleteItemAction,
  updateItemAction,
} from '../reducers/carts/actions'
import { toast } from 'react-toastify'
import { setStorageItem } from '../utils/localStorage'

interface CartContextType {
  items: Cart[]
  addToCart: (data: Coffee) => void
  removeFromCart: (data: Cart) => void
  updateCoffeeAmountFromCart: (type: 'add' | 'remove', coffeeId: number) => void
  clearCart: () => void
  cartTotal: number
  cartSubTotal: number
  freight: number
}

const FREIGHT_VALUE = 3.5

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { items: [], itemId: null },
    initializer,
  )

  const { items } = cartState

  useEffect(() => {
    setStorageItem(CART_KEY, cartState)
  }, [cartState])

  function addToCart(data: Coffee) {
    const hasItemOnCart = items.some((item) => {
      return item.id === data.id
    })

    if (hasItemOnCart) {
      dispatch(updateItemAction('add', data.id))
      toast.success('Item adicionado ao carrinho')
      return
    }

    const newItem: Cart = {
      id: data.id,
      title: data.title,
      amount: data.amount,
      price: data.price,
      image: data.image,
      total: data.total,
    }

    dispatch(addNewItemAction(newItem))
    toast.success('Item adicionado ao carrinho')
  }

  function updateCoffeeAmountFromCart(
    type: 'add' | 'remove',
    coffeeId: number,
  ) {
    dispatch(updateItemAction(type, coffeeId))
  }

  function removeFromCart(newItem: Cart) {
    dispatch(deleteItemAction(newItem))
  }

  function clearCart() {
    dispatch(cleanItemAction())
  }

  const cartSubTotal = items.reduce(
    (accumulator, sum) => accumulator + (sum.total || sum.price),
    0,
  )

  const cartTotal = cartSubTotal + FREIGHT_VALUE

  const freight = FREIGHT_VALUE

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateCoffeeAmountFromCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartSubTotal,
        freight,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}

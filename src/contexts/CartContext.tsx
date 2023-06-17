import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { Cart, Coffee } from '../@types/mockes'
import { APP_KEY } from '../utils/localStorage'
import { CART_KEY, cartReducer } from '../reducers/carts/reducers'
import {
  addNewItemAction,
  deleteItemAction,
  updateItemAction,
} from '../reducers/carts/actions'
import { toast } from 'react-toastify'

interface CartContextType {
  items: Cart[]
  addToCart: (data: Coffee) => void
  removeFromCart: (data: Cart) => void
  updateCoffeeAmountFromCart: (type: 'add' | 'remove', coffeeId: number) => void
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
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(`@${APP_KEY}:${CART_KEY}`)

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { items } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(`@${APP_KEY}:${CART_KEY}`, stateJSON)
  }, [cartState])

  function addToCart(data: Coffee) {
    console.log(data)
    const hasItemOnCart = items.some((item) => {
      return item.id === data.id
    })
    console.log(hasItemOnCart)
    if (hasItemOnCart) {
      dispatch(updateItemAction('add', data.id))
      return
    }

    const newItem: Cart = {
      id: data.id,
      title: data.description,
      amount: 1,
      price: data.price,
      img: data.image,
      total: data.total,
    }
    console.log(newItem)
    dispatch(addNewItemAction(newItem))
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
        cartTotal,
        cartSubTotal,
        freight,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { produce } from 'immer'
import { Cart } from '../../@types/mockes'
import { ActionTypes } from './actions'
import { getStorageItem } from '../../utils/localStorage'

export const CART_KEY = 'cartItems'

export interface CartState {
  items: Cart[]
  itemId?: number | null
}

const initialState: CartState = {
  items: [],
  itemId: null,
}

export const initializer = (initialValue = initialState) =>
  getStorageItem(CART_KEY) || initialValue

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, (draft) => {
        // eslint-disable-next-line no-unused-expressions, no-sequences
        draft.items.push(action.payload.newItem),
          (draft.itemId = action.payload.newItem.id)
      })
    }

    case ActionTypes.UPDATE_ITEM: {
      const cartItems = [...state.items]

      const cartItemsParsed = cartItems?.map((coffee) => {
        if (action.payload.coffeeId === coffee.id) {
          const AddRemoveItemAmount =
            action.payload.type === 'add'
              ? coffee.amount + 1
              : coffee.amount - 1

          const updatedItem = {
            ...coffee,
            amount: AddRemoveItemAmount,
            total: coffee.price * AddRemoveItemAmount,
          }
          return { ...updatedItem }
        }

        return coffee
      })

      return produce(state, (draft) => {
        draft.items = cartItemsParsed
      })
    }

    case ActionTypes.DELETE_ITEM: {
      const currentItemIndex = state.items.indexOf(action.payload.newItem.id)

      return produce(state, (draft) => {
        draft.items.splice(currentItemIndex, 1)
      })
    }

    default:
      return state
  }
}

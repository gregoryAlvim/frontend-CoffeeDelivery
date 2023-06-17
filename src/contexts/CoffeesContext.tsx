import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Coffee } from '../@types/mockes'

import { coffees } from '../data/coffees'

interface CoffeeContextType {
  dataCoffees: Coffee[]
  handleUpdateCoffeeAmount: (type: 'add' | 'remove', coffeeId: number) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeeContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [dataCoffees, setDataCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    setTimeout(() => {
      setDataCoffees(coffees)
    }, 1000)
  }, [])

  function handleUpdateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {
    const coffeesParsed = dataCoffees?.map((coffee) => {
      if (coffeeId === coffee.id) {
        const AddRemoveItemAmount =
          type === 'add' ? coffee.amount + 1 : coffee.amount - 1

        const updatedItem = {
          ...coffee,
          amount: AddRemoveItemAmount,
          total: coffee.price * AddRemoveItemAmount,
        }

        return { ...updatedItem }
      }
      return coffee
    })

    return setDataCoffees(coffeesParsed)
  }

  return (
    <CoffeesContext.Provider value={{ dataCoffees, handleUpdateCoffeeAmount }}>
      {children}
    </CoffeesContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeesContext)

  return context
}

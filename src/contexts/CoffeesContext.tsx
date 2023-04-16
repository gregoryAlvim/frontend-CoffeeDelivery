import { createContext, ReactNode } from "react";
import { Coffee, coffees } from "../data/coffees";

interface CoffeeContextType {
   dataCoffees: Coffee[];
}

interface CoffeesContextProviderProps {
   children: ReactNode;
 }

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {

   const dataCoffees = coffees;

   return (
      <CoffeesContext.Provider value={{dataCoffees}}>
        {children}
      </CoffeesContext.Provider>
    )
}


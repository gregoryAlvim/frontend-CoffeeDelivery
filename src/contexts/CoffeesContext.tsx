import { createContext, ReactNode } from "react";
import { Coffee, coffees } from "../data/coffees";

interface CoffeeContextType {
   data: Coffee[];
}

interface CoffeesContextProviderProps {
   children: ReactNode;
 }

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {

   const data = coffees;

   return (
      <CoffeesContext.Provider value={{data}}>
        {children}
      </CoffeesContext.Provider>
    )
}


import { useState } from "react";
import { Icon } from 'phosphor-react';

import { Button } from "./styles";

interface PropsFormPayment {
   icon: Icon,
   name: string
}

export function FormPayment({ icon: Icon, name }: PropsFormPayment) {

   const [isClicked, setIsClicked] = useState(false);

   const handleClick = () => {
      setIsClicked(!isClicked);
    };

   return (
      <Button
         role="button" 
         onClick={handleClick}
         isClicked={isClicked}
      >
         <Icon className="iconPayment" size={20} />
         <input type="text" disabled value={name}/>
      </Button>
   )
}
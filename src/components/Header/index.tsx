import { useTheme } from 'styled-components';
import { ShoppingCart, MapPin } from '@phosphor-icons/react';

import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg';
import { HeaderContainer, AddressAndShoppingCartContainer, AddressContainer } from "./styles";

export function Header() {

   const theme = useTheme();

   return (
      <HeaderContainer>
         <img
            src={logoCoffeeDelivery}
            alt="Icone de um copo de café com a imagem de um foguete estampada. Ao lado está escrito Coffee Delivery"
         />

         <AddressAndShoppingCartContainer>
            <AddressContainer>
               <MapPin size={22} weight="fill" color={theme['purple-300']} />
               <span> Jaguaruna, SC </span>
            </AddressContainer> 

            <button className='cartShopButton'>
               <ShoppingCart size={22} weight="fill" color={theme['yellow-500']} />
            </button>
         </AddressAndShoppingCartContainer>
      </ HeaderContainer>
   )
}
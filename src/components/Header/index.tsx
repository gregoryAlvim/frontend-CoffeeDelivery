import { useTheme } from 'styled-components'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import {
  HeaderContainer,
  AddressAndShoppingCartContainer,
  AddressContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { Badge } from '../Badge'

export function Header() {
  const theme = useTheme()

  const navigate = useNavigate()

  const { items } = useCart()

  const hasItemsOnCart = items?.length > 0

  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="Icone de um copo de café com a imagem de um foguete estampada. Ao lado está escrito Coffee Delivery"
        onClick={() => navigate('/')}
        aria-label="Voltar para a Home"
      />

      <AddressAndShoppingCartContainer>
        <AddressContainer>
          <MapPin size={22} weight="fill" color={theme['purple-300']} />
          <span> Jaguaruna, SC </span>
        </AddressContainer>

        <button
          onClick={() => hasItemsOnCart && navigate('/checkout')}
          className="cartShopButton"
        >
          {hasItemsOnCart && (
            <Badge aria-label="Cart Items">{items?.length}</Badge>
          )}
          <ShoppingCart size={22} weight="fill" color={theme['yellow-500']} />
        </button>
      </AddressAndShoppingCartContainer>
    </HeaderContainer>
  )
}

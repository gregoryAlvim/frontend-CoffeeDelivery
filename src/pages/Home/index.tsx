import { useTheme } from 'styled-components'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { useCoffee } from '../../contexts/CoffeesContext'
import { TextWithIcon } from '../../components/TextWithIcon'
import { CoffeeItem } from './components/CoffeeItem'

import sloganCoffeeDelivery from '../../assets/sloganCoffeeDelivery.svg'
import {
  CoffeesContainer,
  DescriptionSloganContainer,
  DescriptionSloganItensContainer,
  HomeContainer,
  ShowcaseContainer,
  SloganContainer,
} from './styles'

export function Home() {
  const theme = useTheme()

  const { dataCoffees } = useCoffee()

  return (
    <HomeContainer>
      <SloganContainer>
        <DescriptionSloganContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <DescriptionSloganItensContainer>
            <TextWithIcon
              icon={ShoppingCart}
              color={theme.white}
              backgroundColor={'yellow500'}
              description="Compra simples e segura"
            />
            <TextWithIcon
              icon={Package}
              color={theme.white}
              backgroundColor={'gray600'}
              description="Embalagem mantém o café intacto"
            />
            <TextWithIcon
              icon={Timer}
              color={theme.white}
              backgroundColor={'yellow300'}
              description="Entrega rápida e rastreada"
            />
            <TextWithIcon
              icon={Coffee}
              color={theme.white}
              backgroundColor={'purple300'}
              description="O café chega fresquinho até você"
            />
          </DescriptionSloganItensContainer>
        </DescriptionSloganContainer>

        <img src={sloganCoffeeDelivery} alt="" />
      </SloganContainer>

      <ShowcaseContainer>
        <h3>Nossos cafés</h3>
        <CoffeesContainer>
          {dataCoffees.map((coffee) => (
            <CoffeeItem key={coffee.id} {...coffee} />
          ))}
        </CoffeesContainer>
      </ShowcaseContainer>
    </HomeContainer>
  )
}

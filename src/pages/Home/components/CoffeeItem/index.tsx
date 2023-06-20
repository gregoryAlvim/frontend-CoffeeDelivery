import { Coffee } from '../../../../@types/mockes'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { useCart } from '../../../../contexts/CartContext'
import { useCoffee } from '../../../../contexts/CoffeesContext'

import {
  ItemContainer,
  TagsContainer,
  TagItem,
  PriceCartContainer,
  AmountItensContainer,
} from './styles'

export function CoffeeItem({ ...coffee }: Coffee) {
  const { handleUpdateCoffeeAmount } = useCoffee()
  const { addToCart } = useCart()

  function handleUpdateAmount(type: 'add' | 'remove', coffeeId: number) {
    handleUpdateCoffeeAmount(type, coffeeId)
  }

  function handleCreateNewItem(cartItem: Coffee) {
    addToCart(cartItem)
  }

  const accumulatorTotalItem = coffee.total || coffee.price

  return (
    <ItemContainer>
      <img src={coffee.image} alt="a" />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <TagItem key={tag.id}>{tag.name}</TagItem>
        ))}
      </TagsContainer>

      <span>{coffee.title}</span>

      <p>{coffee.description}</p>

      <PriceCartContainer>
        <p>
          R${' '}
          <span>
            {accumulatorTotalItem?.toFixed(2).toString().replace('.', ',')}
          </span>
        </p>

        <AmountItensContainer>
          <Minus
            onClick={() =>
              coffee.amount > 0 && handleUpdateAmount('remove', coffee.id)
            }
            className="minusAndPlus"
            size={14}
            weight="bold"
          />
          <span>{coffee.amount}</span>
          <Plus
            onClick={() => handleUpdateAmount('add', coffee.id)}
            className="minusAndPlus"
            size={14}
            weight="bold"
          />
        </AmountItensContainer>

        <ShoppingCart
          onClick={() => handleCreateNewItem(coffee)}
          className="shoppingCart"
          size={38}
          weight="fill"
        />
      </PriceCartContainer>
    </ItemContainer>
  )
}

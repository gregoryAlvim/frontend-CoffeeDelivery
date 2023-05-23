import { Coffee } from "../../../../data/coffees";
import { Plus, Minus, ShoppingCart } from "phosphor-react";
import { ItemContainer, TagsContainer, TagItem, PriceCartContainer, AmountItensContainer } from "./styles";

export function CoffeeItem({id, title, description, price, tags, image, amount }: Coffee) {
   return (
      <ItemContainer>
         <img src={image} alt="" />

         <TagsContainer>
            {tags.map(tag => (
               <TagItem key={tag.id}>{tag.name}</TagItem>
            ))}
         </TagsContainer>

         <span>{title}</span>

         <p>{description}</p>

         <PriceCartContainer>
            <p>R$ <span>{price.toFixed(2).toString().replace("." , ",")}</span></p>

            <AmountItensContainer>
               <Minus className="minusAndPlus" size={14} weight="bold" />
               <span>1</span>
               <Plus className="minusAndPlus" size={14} weight="bold" />
            </AmountItensContainer>

            <ShoppingCart className="shoppingCart" size={38} weight="fill" />
         </PriceCartContainer>
      </ItemContainer>
   )
}
import { Coffee } from "../../../../data/coffees";
import { ItemContainer, TagsContainer, TagItem } from "./styles";

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


      </ItemContainer>
   )
}
import imageAmerican from "./coffeesImages/Americano.png";
import imageArabe from "./coffeesImages/Arabe.png";
import imageCoffeeWithMilk from "./coffeesImages/CafeComLeite.png";
import imageIceCoffee from "./coffeesImages/CafeGelado.png";
import imageCapuccino from "./coffeesImages/Capuccino.png";
import imageHotChocolate from "./coffeesImages/ChocolateQuente.png";
import imageCubano from "./coffeesImages/Cubano.png";
import imageExpresso from "./coffeesImages/Expresso.png";
import imageExpressoCremoso from "./coffeesImages/ExpressoCremoso.png";
import imageHavaiano from "./coffeesImages/Havaiano.png";
import imageIrlandes from "./coffeesImages/Irlandes.png";
import imageLatte from "./coffeesImages/Latte.png";
import imageMacchiato from "./coffeesImages/Macchiato.png";
import imageMochaccino from "./coffeesImages/Mochaccino.png";

export interface Coffee {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  tags: Tag[],
  amount: number,
}

interface Tag {
  id: number,
  name: string
}

export const coffees: Coffee[] = [
  {
    id: 0,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: imageExpresso,
    tags: [{id: 1, name: 'Tradicional'}],
    amount: 0,
  },
  {
    id: 1,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: imageAmerican,
    tags: [{id: 1, name: 'Tradicional'}],
    amount: 0,
  },
  {
    id: 2,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    image: imageExpressoCremoso,
    tags: [{id: 1, name: 'Tradicional'}],
    amount: 0,
  },
  {
    id: 3,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    image: imageIceCoffee,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Gelado'}],
    amount: 0,
  },
  {
    id: 4,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    image: imageCoffeeWithMilk,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 5,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    image: imageLatte,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 6,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    image: imageCapuccino,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 7,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    image: imageMacchiato,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 8,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    image: imageMochaccino,
    tags: [{id: 1, name: 'Tradicional'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 9,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    image: imageHotChocolate,
    tags: [{id: 1, name: 'Especial'}, {id: 2, name: 'Com leite'}],
    amount: 0,
  },
  {
    id: 10,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    image: imageCubano,
    tags: [{id: 1, name: 'Especial'}, {id: 2, name: 'Alcoólico'}, {id: 3, name: 'Gelado'}],
    amount: 0,
  },
  {
    id: 11,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    image: imageHavaiano,
    tags: [{id: 1, name: 'Especial'}],
    amount: 0,
  },
  {
    id: 12,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    image: imageArabe,
    tags: [{id: 1, name: 'Especial'}],
    amount: 0,
  },
  {
    id: 13,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    image: imageIrlandes,
    tags: [{id: 1, name: 'Especial'}, {id: 2, name: 'Alcoólico'}],
    amount: 0,
  },
]
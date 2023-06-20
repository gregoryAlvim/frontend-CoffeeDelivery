import { CreditCard, Money, Bank } from 'phosphor-react'

export const paymentMethods = [
  {
    id: 1,
    description: 'CARTÃO DE CRÉDITO',
    icon: CreditCard,
  },
  {
    id: 2,
    description: 'CARTÃO DE DEBITO',
    icon: Bank,
  },
  {
    id: 3,
    description: 'DINHEIRO',
    icon: Money,
  },
]

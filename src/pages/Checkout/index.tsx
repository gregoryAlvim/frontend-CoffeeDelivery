import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from 'phosphor-react'

import { FormPayment } from './components/FormPayment'

import { paymentMethods } from '../../data/paymentMethods'
import {
  CheckoutMain,
  CheckoutContainer,
  CheckoutTitle,
  FormContainer,
  TextSpan,
  TextParagraph,
  InputForm,
  CoffeeCard,
  ResumeCheckoutContainer,
  AmountItensContainer,
  CoffeeImage,
  CoffeeTitle,
  CoffeePrice,
  RemoveCoffeeButton,
  ResumeItemsContainer,
  CoffeeCardRow,
  CoffeeRow,
  ResumeTotalCartContainer,
  TitleAndPriceComponent,
  TitleResumeCart,
  PriceResumeCart,
  CheckedOrderButton,
} from './styles'
import { useCart } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../../@types/mockes'
import { useTheme } from 'styled-components'

const createOrderFormSchema = z.object({
  cep: z
    .string()
    .nonempty('O cep é obrigatório')
    .min(7, 'O cep está incompleto')
    .max(8)
    .transform((cep) => cep.replace('-', '')),
  rua: z.string().nonempty('A rua é obrigatório'),
  numero: z.string().nonempty('O numero é obrigatório'),
  complemento: z.string(),
  bairro: z.string().nonempty('O bairro é obrigatório'),
  cidade: z.string().nonempty('A cidade é obrigatório'),
  uf: z.string().nonempty('A UF é obrigatório'),
})

export type CreateOrderFormData = z.infer<typeof createOrderFormSchema>

export function Checkout() {
  const [paymentMethodSelected, setPaymentMethodSelected] = useState('')
  const {
    items,
    removeFromCart,
    updateCoffeeAmountFromCart,
    clearCart,
    cartSubTotal,
    cartTotal,
    freight,
  } = useCart()

  const navigate = useNavigate()
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrderFormData>({
    resolver: zodResolver(createOrderFormSchema),
  })

  function handleChangePaymentMethods(selectedPaymentMethod: string) {
    setPaymentMethodSelected(selectedPaymentMethod)
  }

  function handleOrderData(addressData: CreateOrderFormData) {
    clearCart()
    console.log(addressData)
    navigate('/success', { state: { addressData, paymentMethodSelected } })
  }

  function handleUpdateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {
    updateCoffeeAmountFromCart(type, coffeeId)
  }

  function handleItemDelete(data: Cart) {
    removeFromCart(data)
  }

  return (
    <CheckoutMain>
      <CheckoutContainer className="firstContainer">
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>

        <form id="formOrder" onSubmit={handleSubmit(handleOrderData)}>
          <FormContainer className="formAddress">
            <CheckoutContainer className="titleFormAndPaymentContainer">
              <MapPinLine className="mapPinLine" size={22} />
              <TextSpan>Endereço de Entrega</TextSpan>
              <TextParagraph>
                Informe o endereço onde deseja receber seu pedido
              </TextParagraph>
            </CheckoutContainer>

            <div className="formInputsAddressContainer">
              <InputForm
                gridArea="cep"
                {...register('cep')}
                placeholder={errors.cep ? `${errors.cep.message}` : 'CEP'}
              />

              <InputForm
                gridArea="rua"
                {...register('rua')}
                placeholder={errors.rua ? `${errors.rua.message}` : 'Rua'}
              />

              <InputForm
                gridArea="numero"
                {...register('numero', { required: true })}
                placeholder={
                  errors.numero ? `${errors.numero.message}` : 'Numero'
                }
              />

              <InputForm
                gridArea="complemento"
                className="inputFormComplemento"
                {...register('complemento')}
                placeholder="Complemento"
              />

              <InputForm
                gridArea="bairro"
                {...register('bairro', { required: true })}
                placeholder={
                  errors.bairro ? `${errors.bairro.message}` : 'Bairro'
                }
              />

              <InputForm
                gridArea="cidade"
                {...register('cidade', { required: true })}
                placeholder={
                  errors.cidade ? `${errors.cidade.message}` : 'Cidade'
                }
              />

              <InputForm
                gridArea="uf"
                {...register('uf', { required: true })}
                placeholder={errors.uf ? `${errors.uf.message}` : 'UF'}
              />
            </div>
          </FormContainer>

          <FormContainer className="formSelectPayment">
            <CheckoutContainer className="titleFormAndPaymentContainer">
              <CurrencyDollar className="currencyDollar" size={22} />
              <TextSpan>Pagamento</TextSpan>
              <TextParagraph>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextParagraph>
            </CheckoutContainer>

            <div className="formInputsPaymentContainer">
              {paymentMethods &&
                paymentMethods.map((paymentMethod) => (
                  <FormPayment
                    active={paymentMethod.description === paymentMethodSelected}
                    onClick={() =>
                      handleChangePaymentMethods(paymentMethod.description)
                    }
                    key={paymentMethod.id}
                    icon={paymentMethod.icon}
                    name={paymentMethod.description}
                  ></FormPayment>
                ))}
            </div>
          </FormContainer>
        </form>
      </CheckoutContainer>

      <CheckoutContainer className="secondContainer">
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>

        <ResumeCheckoutContainer>
          {items?.map((product) => (
            <CoffeeCardRow key={product.id}>
              <CoffeeCard>
                <CoffeeImage src={product.image} />

                <ResumeItemsContainer>
                  <CoffeeTitle>{product.title}</CoffeeTitle>

                  <AmountItensContainer>
                    <Minus
                      onClick={() =>
                        product.amount > 1 &&
                        handleUpdateCoffeeAmount('remove', product.id)
                      }
                      className="minusAndPlus"
                      size={14}
                      weight="bold"
                    />
                    <span>{product.amount}</span>
                    <Plus
                      onClick={() =>
                        handleUpdateCoffeeAmount('add', product.id)
                      }
                      className="minusAndPlus"
                      size={14}
                      weight="bold"
                    />
                  </AmountItensContainer>

                  <RemoveCoffeeButton
                    onClick={() => handleItemDelete(product)}
                    className="shoppingCart"
                  >
                    <Trash color={theme['purple-300']} size={16} />
                    <span>REMOVER</span>
                  </RemoveCoffeeButton>
                </ResumeItemsContainer>

                <CoffeePrice>
                  {(product.total ? product.total : product.price)
                    .toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })
                    .toString()
                    .replace('.', ',')}
                </CoffeePrice>
              </CoffeeCard>

              <CoffeeRow />
            </CoffeeCardRow>
          ))}

          <ResumeTotalCartContainer>
            <TitleAndPriceComponent>
              <TitleResumeCart>Total de itens</TitleResumeCart>
              <PriceResumeCart>
                {cartSubTotal
                  ?.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                  .toString()
                  .replace('.', ',')}
              </PriceResumeCart>
            </TitleAndPriceComponent>
            <TitleAndPriceComponent>
              <TitleResumeCart>Entrega</TitleResumeCart>
              <PriceResumeCart>
                {freight
                  ?.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                  .toString()
                  .replace('.', ',')}
              </PriceResumeCart>
            </TitleAndPriceComponent>
            <TitleAndPriceComponent>
              <TitleResumeCart className="lastChildTitle">
                Total
              </TitleResumeCart>
              <PriceResumeCart className="lastChildTitle">
                {cartTotal
                  ?.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                  .toString()
                  .replace('.', ',')}
              </PriceResumeCart>
            </TitleAndPriceComponent>
          </ResumeTotalCartContainer>

          <CheckedOrderButton form="formOrder" type="submit">
            CONFIRMAR PEDIDO
          </CheckedOrderButton>
        </ResumeCheckoutContainer>
      </CheckoutContainer>
    </CheckoutMain>
  )
}

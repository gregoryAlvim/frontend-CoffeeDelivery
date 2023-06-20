import styled from 'styled-components'

export const CheckoutMain = styled.main`
  display: flex;
  padding: 4rem 16rem;
  gap: 3.2rem;
`

export const CheckoutContainer = styled.article`
  .firstContainer {
  }

  .formAddress {
    width: 64rem;
    height: 37.2rem;
    margin-bottom: 1.2rem;

    .formInputsAddressContainer {
      display: grid;
      margin-top: 4.4rem;
      gap: 1.6rem;
      grid-template-columns: 20rem auto auto 6rem;
      grid-template-areas:
        'cep . . .'
        'rua rua rua rua'
        'numero complemento complemento complemento'
        'bairro cidade cidade uf';
    }
  }

  .formSelectPayment {
    width: 64rem;
    height: 20.7rem;

    .formInputsPaymentContainer {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-top: 3.2rem;
    }
  }

  .titleFormAndPaymentContainer {
    display: grid;
    grid-template-columns: 30px;
    grid-template-areas:
      'icon title title'
      'icon paragraph paragraph';

    .mapPinLine {
      color: ${({ theme }) => theme['yellow-500']};
      grid-area: icon;
    }

    .currencyDollar {
      color: ${({ theme }) => theme['purple-300']};
      grid-area: icon;
    }
  }

  .secondContainer {
  }
`

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 130%;
  color: ${({ theme }) => theme['gray-700']};
  margin-bottom: 1.5rem;
`

export const FormContainer = styled.div`
  padding: 4rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['base-card']};
`

export const TextSpan = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme['gray-700']};
  grid-area: title;
`

export const TextParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 130%;
  color: ${({ theme }) => theme['gray-600']};
  grid-area: paragraph;
`

export const InputForm = styled.input<{ gridArea?: string }>`
  grid-area: ${(props) => props.gridArea};
  padding: 12px;
  height: 4.2rem;
  color: ${({ theme }) => theme['gray-600']};
  background: ${({ theme }) => theme['gray-200']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme['yellow-500']};
  }
`

export const ResumeCheckoutContainer = styled.div`
  min-width: 44.8rem;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 6px 44px;
  background: ${({ theme }) => theme['base-card']};
`

export const CoffeeCardRow = styled.div``

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: start;
`

export const ResumeItemsContainer = styled.div`
  width: 17rem;
  margin-right: 5rem;
  display: grid;
  align-items: center;
  grid-template-areas:
    'cTitle cTitle cTitle'
    'cCount cRemove cRemove';
`

export const CoffeeImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 2rem;
`

export const CoffeeTitle = styled.span`
  grid-area: cTitle;
  font-size: 1.6rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const CoffeePrice = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-600']};
`

export const AmountItensContainer = styled.div`
  user-select: none;
  grid-area: cCount;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.8rem;

  width: 7.2rem;
  height: 3.2rem;
  border-radius: 6px;
  padding: 0.8rem;
  gap: 0.4rem;

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
  }

  background: ${({ theme }) => theme['gray-300']};

  .minusAndPlus {
    border: none;
    background: transparent;
    cursor: pointer;

    color: ${({ theme }) => theme['purple-300']};

    &:hover {
      color: ${({ theme }) => theme['purple-500']};
    }
  }
`

export const RemoveCoffeeButton = styled.button`
  grid-area: cRemove;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  gap: 4px;

  font-size: 1.2rem;
  line-height: 160%;

  width: 9.1rem;
  height: 3.2rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['gray-300']};
  color: ${({ theme }) => theme['gray-600']};

  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['gray-700']};
  }

  border: none;
  cursor: pointer;
`

export const CoffeeRow = styled.div`
  width: 36.8rem;
  height: 0px;

  margin: 2.4rem 0;

  border: 1px solid ${({ theme }) => theme['gray-300']};
`
export const ResumeTotalCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const TitleAndPriceComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .lastChildTitle {
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const TitleResumeCart = styled.span`
  color: ${({ theme }) => theme['gray-600']};
`

export const PriceResumeCart = styled.span`
  color: ${({ theme }) => theme['gray-600']};
  font-size: 1.6rem;
`

export const CheckedOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  gap: 4px;

  margin-top: 2.4rem;

  font-weight: 700;
  line-height: 160%;

  height: 4.6rem;
  border-radius: 6px;

  background: ${({ theme }) => theme['yellow-300']};
  color: ${({ theme }) => theme.white};

  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme['yellow-500']};
  }

  border: none;
  cursor: pointer;
`

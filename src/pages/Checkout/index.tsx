import { CurrencyDollar, MapPinLine } from "phosphor-react";
import {CheckoutMain, CheckoutContainer, CheckoutTitle, FormContainer, TextSpan, TextParagraph } from "./styles";

export function Checkout() {
   return (
      <CheckoutMain>
         <CheckoutContainer className="firstContainer">
            <CheckoutTitle>Complete seu pedido</CheckoutTitle>

            <FormContainer className="formAddress">
               <CheckoutContainer className="titleFormAndPaymentContainer">
                  <MapPinLine className="mapPinLine" size={22} />
                  <TextSpan>Endereço de Entrega</TextSpan>
                  <TextParagraph>Informe o endereço onde deseja receber seu pedido</TextParagraph>

                  

               </CheckoutContainer>
            </FormContainer>

            <FormContainer className="formSelectPayment">
               <CheckoutContainer className="titleFormAndPaymentContainer">
                  <CurrencyDollar className="currencyDollar" size={22} />
                  <TextSpan>Pagamento</TextSpan>
                  <TextParagraph>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextParagraph>

               </CheckoutContainer>
            </FormContainer>
         </CheckoutContainer>

         <CheckoutContainer className="secondContainer">
            <CheckoutTitle>Cafés selecionados</CheckoutTitle>
         </CheckoutContainer>
      </CheckoutMain>
   );
}
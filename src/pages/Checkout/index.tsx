import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormPayment } from "./components/FormPayment";

import { CurrencyDollar, MapPinLine, CreditCard, Money, Bank } from "phosphor-react";
import { CheckoutMain, CheckoutContainer, CheckoutTitle, FormContainer, TextSpan, TextParagraph, InputForm } from "./styles";

const createOrderFormSchema = z.object({
   cep: z.string().nonempty('O cep é obrigatório').min(7, 'O cep está incompleto').max(8).transform(cep => cep.replace('-', '')),
   rua: z.string().nonempty('A rua é obrigatório'),
   numero: z.string().nonempty('O numero é obrigatório'),
   complemento: z.string(),
   bairro: z.string().nonempty('O bairro é obrigatório'),
   cidade: z.string().nonempty('A cidade é obrigatório'),
   uf: z.string().nonempty('A UF é obrigatório'),
   selectedFormPayment: z.string()
})

type CreateOrderFormData = z.infer<typeof createOrderFormSchema>

export function Checkout() {

   const { register, handleSubmit, formState: { errors } } = useForm<CreateOrderFormData>({
      resolver: zodResolver(createOrderFormSchema)
   });

   function orderData(data: any) {
      console.log(data);
      console.log(errors);
   }

   return (
      <CheckoutMain>
         <CheckoutContainer className="firstContainer">
            <CheckoutTitle>Complete seu pedido</CheckoutTitle>

            <form onSubmit={handleSubmit(orderData)}>
               <FormContainer className="formAddress">
                  <CheckoutContainer className="titleFormAndPaymentContainer">
                     <MapPinLine className="mapPinLine" size={22} />
                     <TextSpan>Endereço de Entrega</TextSpan>
                     <TextParagraph>Informe o endereço onde deseja receber seu pedido</TextParagraph>
                  </CheckoutContainer>
                  
                  <div className="formInputsAddressContainer">
                     <InputForm
                        gridArea="cep"
                        {...register("cep")}
                        placeholder={errors.cep ? `${errors.cep.message}` : 'CEP'}
                     />

                     <InputForm
                        gridArea="rua"
                        {...register("rua")}
                        placeholder={errors.rua ? `${errors.rua.message}` : 'Rua'}
                     />

                     <InputForm
                        gridArea="numero"
                        {...register("numero", { required: true })}
                        placeholder={errors.numero ? `${errors.numero.message}` : 'Numero'}
                     />

                     <InputForm
                        gridArea="complemento"
                        className="inputFormComplemento"
                        {...register("complemento")}
                        placeholder="Complemento"
                     />
                     
                     <InputForm
                        gridArea="bairro"
                        {...register("bairro", { required: true })}
                        placeholder={errors.bairro ? `${errors.bairro.message}` : 'Bairro'}
                     />

                     <InputForm
                        gridArea="cidade"
                        {...register("cidade", { required: true })}
                        placeholder={errors.cidade ? `${errors.cidade.message}` : 'Cidade'}
                     />

                     <InputForm
                        gridArea="uf"
                        {...register("uf", { required: true })}
                        placeholder={errors.uf ? `${errors.uf.message}` : 'UF'}
                     />
                  </div>
                  <button type="submit">teste</button>
               </FormContainer>

               <FormContainer className="formSelectPayment">
                  <CheckoutContainer className="titleFormAndPaymentContainer">
                     <CurrencyDollar className="currencyDollar" size={22} />
                     <TextSpan>Pagamento</TextSpan>
                     <TextParagraph>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextParagraph>
                  </CheckoutContainer>

                  <div className="formInputsPaymentContainer">
                     <FormPayment {...register("selectedFormPayment")} name="CARTÃO DE CREDITO" icon={CreditCard}></FormPayment>
                     <FormPayment name="CARTÃO DE DÉBITO" icon={Bank}></FormPayment>
                     <FormPayment name="DINHEIRO" icon={Money}></FormPayment>
                  </div>
               </FormContainer>
            </form>

         </CheckoutContainer>

         <CheckoutContainer className="secondContainer">
            <CheckoutTitle>Cafés selecionados</CheckoutTitle>

         </CheckoutContainer>
      </CheckoutMain>
   );
}
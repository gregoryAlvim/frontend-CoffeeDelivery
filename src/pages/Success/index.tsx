import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import illustrationSuccess from '../../assets/IllustrationSuccess.png'
import {
  DefaultContainer,
  ResumeFinishedOrderContainer,
  SubTitle,
  SuccessContainer,
  Title,
  Image,
  ResumeAddressAndPaymentContainer,
  TextTitle,
  TextSubTitle,
} from './styles'
import { useLocation } from 'react-router-dom'

export function Success() {
  const location = useLocation()
  const { addressData } = location.state

  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>

      <DefaultContainer>
        <ResumeFinishedOrderContainer>
          <ResumeAddressAndPaymentContainer>
            <MapPin className="mapPin" weight="fill" size={16} />
            <TextTitle>
              {`Entrega em`}{' '}
              <strong>{`${addressData?.rua}, ${addressData?.numero}`}</strong>
            </TextTitle>
            <TextSubTitle className="lookAtTextTitle">
              {`${addressData?.bairro} - ${addressData?.cidade}, ${addressData?.uf}`}
            </TextSubTitle>
          </ResumeAddressAndPaymentContainer>

          <ResumeAddressAndPaymentContainer>
            <Timer className="timer" weight="fill" size={16} />
            <TextTitle>Previsão de entrega</TextTitle>
            <TextSubTitle>20 min - 30 min</TextSubTitle>
          </ResumeAddressAndPaymentContainer>

          <ResumeAddressAndPaymentContainer>
            <CurrencyDollar className="currencyDollar" size={16} />
            <TextTitle>Pagamento na entrega</TextTitle>
            <TextSubTitle>{`${location?.state?.paymentMethodSelected}`}</TextSubTitle>
          </ResumeAddressAndPaymentContainer>
        </ResumeFinishedOrderContainer>
        <Image src={illustrationSuccess} alt="image" />
      </DefaultContainer>
    </SuccessContainer>
  )
}

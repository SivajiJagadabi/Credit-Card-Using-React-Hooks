// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  HeadingLine,
  CreditCardImg,
  CardHolderNameHead,
  PaymentMethodCard,
  PaymentCardHeading,
  PaymentMethodInput,
  CardNumber,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <HeadingLine />
        <CreditCardImg data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderNameHead>CARDHOLDER NAME</CardHolderNameHead>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </CreditCardImg>
      </CreditCardContainer>
      <PaymentMethodCard data-testid="creditCard">
        <PaymentCardHeading>Payment Method</PaymentCardHeading>
        <PaymentMethodInput
          placeholder="Card Number"
          value={cardNumber}
          type="text"
          onChange={onChangeNumber}
        />
        <PaymentMethodInput
          placeholder="CardHolder Name"
          value={name}
          type="text"
          onChange={onChangeName}
        />
      </PaymentMethodCard>
    </AppContainer>
  )
}

export default CreditCard

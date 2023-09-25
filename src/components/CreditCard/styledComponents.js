// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 90vh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`

export const CreditCardHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  text-align: center;
  color: white;
  margin-bottom: 0px;
  padding-bottom: 0px;
`

export const HeadingLine = styled.div`
  border: 1.5px solid #ffd773;
  width: 150px;
  align-self: center;
  margin-right: 30px;
  margin-top: 0px;
  padding-top: 0px;
`

export const CreditCardImg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-position: Center;
  background-size: cover;
  border-radius: 8px;
  height: 230px;
  margin-top: 80px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`
export const CardHolderNameHead = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 25px;
  margin-bottom: 0px;
`
export const PaymentMethodCard = styled.div`
  height: 230px;
  border-radius: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  box-shadow: 0px 0px 1px 2px #d3d9e0;
  margin-top: 25px;
`
export const PaymentCardHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
  color: #344e7a;
`
export const PaymentMethodInput = styled.input`
  height: 35px;
  width: 250px;
  margin: 8px;
  border: 1px solid #d3d9e0;
  border-radius: 5x;
  color: #475569;
`
export const CardNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  text-align: center;
  color: white;
  margin: 25px;
  margin-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const CardHolderName = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  text-align: center;
  color: white;
  margin-left: 25px;
`

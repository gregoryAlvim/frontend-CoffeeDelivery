import styled from 'styled-components'

export const SuccessContainer = styled.main`
  padding: 8rem 16rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 130%;

  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme['yellow-500']};
`

export const SubTitle = styled.p`
  font-size: 2rem;

  margin-bottom: 4rem;
  color: ${({ theme }) => theme['gray-700']};
`

export const DefaultContainer = styled.article`
  display: flex;
  gap: 10.2rem;
`

export const ResumeFinishedOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  width: 52.6rem;
  height: 27rem;

  border-radius: 6px 36px;
  border: 1px solid;
  border-image: linear-gradient(#dbac2c, #8047f8) 1;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-clip: content-box, border-box;
`

export const Image = styled.img`
  width: 49.2rem;
  height: 29.3rem;
`

export const ResumeAddressAndPaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem;
  grid-template-areas:
    'icon title title'
    'icon paragraph paragraph';

  margin: 0 4rem;

  .mapPin {
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    border-radius: 1000px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['purple-300']};
    grid-area: icon;
  }

  .timer {
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    border-radius: 1000px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-300']};
    grid-area: icon;
  }

  .currencyDollar {
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    border-radius: 1000px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-500']};
    grid-area: icon;
  }

  .lookAtTextTitle {
    font-weight: 400;
  }
`

export const TextTitle = styled.span`
  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme['gray-600']};
  grid-area: title;
`

export const TextSubTitle = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 130%;
  color: ${({ theme }) => theme['gray-600']};
  grid-area: paragraph;
`

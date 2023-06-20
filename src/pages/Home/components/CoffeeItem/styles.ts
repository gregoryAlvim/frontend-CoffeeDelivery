import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 25.6rem;
  height: 31rem;
  border-radius: 6px 36px;
  padding: 0rem 2rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  background: ${({ theme }) => theme['gray-100']};

  line-height: 130%;
  margin-bottom: 4rem;

  img {
    position: absolute;
    width: 12rem;
    height: 12rem;
    top: -20px;
  }

  > span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2rem;

    margin: 1.6rem 0 0.8rem 0;

    color: ${({ theme }) => theme['gray-700']};
  }

  > p {
    color: ${({ theme }) => theme['gray-500']};
    text-align: center;
    margin-bottom: 3.3rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-top: 11.2rem;
`

export const TagItem = styled.span`
  font-weight: 700;
  font-size: 1rem;
  border-radius: 100px;

  background: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-500']};
  text-transform: uppercase;

  padding: 0.4rem 0.8rem;
`

export const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    width: 8rem;
    display: flex;
    align-items: center;
    gap: 2px;

    color: ${({ theme }) => theme['gray-600']};
  }

  span {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-600']};
  }

  .shoppingCart {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['purple-500']};
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background: ${({ theme }) => theme['purple-300']};
    }
  }
`

export const AmountItensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 7.2rem;
  height: 3.8rem;
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

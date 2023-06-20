import React from 'react'
import styled from 'styled-components'

type Props = {
  active?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 17.8rem;
  height: 5rem;
  padding: 1.6rem;
  border-radius: 6px;
  border: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;

  border: 1px solid
    ${({ active, theme }) => (active ? theme['purple-300'] : 'none')};

  color: ${({ theme }) => theme['gray-600']};
  background: ${({ theme }) => theme['gray-300']};

  transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['gray-700']};
    background: ${({ theme }) => theme['gray-400']};
  }

  .iconPayment {
    color: ${({ theme }) => theme['purple-300']};
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 160%;

  text-transform: uppercase;

  color: ${({ theme }) => theme['gray-600']};
`

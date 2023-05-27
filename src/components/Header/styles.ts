import styled from 'styled-components';

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 3.2rem 16rem;

   @media (max-width: 1390px) {
    padding: 3.2rem 10rem;
   }
  
   @media (max-width: 768px) {
      padding: 3.2rem 2rem;
   }
`;

export const AddressAndShoppingCartContainer = styled.div`
   display: flex;
   gap: 1.2rem;

   & .cartShopButton {
      width: 3.8rem;
      height: 3.8rem;
      padding: 0.8rem;
      border-radius: 6px;

      background: ${({ theme }) => theme['yellow-100']};
      border: none;

      cursor: pointer;
   }
`;

export const AddressContainer = styled.div`
   display: flex;
   align-items: center;

   gap: 0.4rem;
   width: 14.3rem;
   height: 3.8rem;
   padding: 0.8rem;
   border-radius: 6px;

   background: ${({ theme }) => theme['purple-100']};
   color: ${({ theme }) => theme['purple-500']};

   line-height: 1.82rem; 
`;
import styled from "styled-components";

export const ItemContainer = styled.div`
   width: 25.6rem;
   height: 31rem;
   border-radius: 6px 36px;
   padding: 2rem;

   display: flex;
   align-items: center;
   flex-direction: column;

   background: ${({ theme }) => theme['gray-100']};

   line-height: 130%;

   img {
      margin-bottom: 1.2rem;
   }

   > span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 2rem;

      margin: 1.6rem 0 0.8rem 0;
      
      color: ${({ theme }) => theme['gray-700']};
   }

   p {
      color: ${({ theme }) => theme['gray-500']};
      text-align: center;
      margin-bottom: 3.3rem;
   }
`;

export const TagsContainer = styled.div`
   display: flex;
   gap: 0.4rem;
`;

export const TagItem = styled.span`

   font-weight: 700;
   font-size: 1rem;
   border-radius: 100px;

   background: ${({ theme }) => theme['yellow-100']};
   color: ${({ theme }) => theme['yellow-500']};
   text-transform: uppercase;
   

   padding: 0.4rem 0.8rem;

`;

export const PriceCartContainer = styled.div`
   display: flex;
   gap: 0.4rem;

   p {
      color: ${({ theme }) => theme['gray-600']};
   }

   span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
      color: ${({ theme }) => theme['gray-600']};
   }
`;

export const AmountItensContainer = styled.div`

`;
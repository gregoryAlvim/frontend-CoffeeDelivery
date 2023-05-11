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

   > span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      
      color: ${({ theme }) => theme['gray-700']};
   }

   p {
      color: ${({ theme }) => theme['gray-500']};
      text-align: center;
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
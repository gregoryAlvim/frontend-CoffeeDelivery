import styled from "styled-components";

 export const STATUS_COLORS = {
   yellow500: 'yellow-500',
   gray600: 'gray-600',
   yellow300: 'yellow-300',
   purple300: 'purple-300'
 } as const
 
 interface IconComponenteColor {
   bgIconColor: keyof typeof STATUS_COLORS
 }

export const TextWithIconContainer = styled.div<IconComponenteColor>`
   display: flex;
   align-items: center;
   gap: 1.2rem;

   p {
      font-size: 1.6rem;
      line-height: 130%;

      color: ${({ theme }) => theme['gray-600']}
   }

   & .iconComponente {
      width: 3.2rem;
      height: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.8rem;
      border-radius: 1000px;

      background: ${({ theme, bgIconColor }) => theme[STATUS_COLORS[bgIconColor]]};
   }
`;
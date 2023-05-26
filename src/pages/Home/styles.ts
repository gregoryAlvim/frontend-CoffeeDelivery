import styled from "styled-components";
import backgroundSlogan from "../../assets/gradientBackgroundIntro.png";
import { rgba } from "polished";

export const HomeContainer = styled.main`
  margin-top: 9rem;
`;

export const SloganContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => `url(${backgroundSlogan}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme["white"]} 0%,
        ${rgba(theme["background"], 0.2)} 50%,
        ${theme["background"]} 100%
      )`};
  background-size: cover;

  padding: 0 16rem;
  height: 54.4rem;

  @media (max-width: 1390px) {
    padding: 0 10rem;
  }

  @media (max-width: 1260px) {
    display: grid;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.3;
    }
  }
  
  @media (max-width: 768px) {

  }
`;

export const DescriptionSloganContainer = styled.div`
  width: 58.8rem;
  
  h1 {
    height: 12.4rem;
    margin-bottom: 1.6rem;
    
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;
    
    color: ${({ theme }) => theme['gray-800']}
  }
  
  h2 {
    height: 5.2rem;
    margin-bottom: 6.6rem;
    
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
    
    color: ${({ theme }) => theme['gray-700']}
  }

  @media (max-width: 1390px) {
    
  }

  @media (max-width: 1260px) {
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    
  }
`;

export const DescriptionSloganItensContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 2rem;
  @media (max-width: 1390px) {
    
  }

  @media (max-width: 1260px) {
  
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const ShowcaseContainer = styled.section`
  padding: 0 16rem;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-700']};
    margin-bottom: 5.4rem;
  }

  @media (max-width: 1390px) {
    padding: 0 10rem;
  }
`;

export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1390px) {
  }

  @media (max-width: 1260px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    
  }
`;
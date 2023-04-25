import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 9.4rem;
`;

export const SloganContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 900px) {
    /* Estilos específicos para telas com largura de até 768 pixels */
    flex-direction: column;
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

  @media (max-width: 1360px) {
    /* Estilos específicos para telas com largura de até 1360 pixels */
    h1 {
      height: 15rem;
      line-height: 130%;
      font-size: 4.3rem;
    }
  }

  @media (max-width: 1200px) {
    /* Estilos específicos para telas com largura de até 1360 pixels */
    h1 {
      height: 20rem;
      font-size: 4rem;
    }
  }
  
  @media (max-width: 900px) {
    /* Estilos específicos para telas com largura de até 900 pixels */
    width: 100%;
    text-align: center;

    h1 {
      height: 15rem;
    }
  }
`;

export const DescriptionSloganItensContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    /* Estilos específicos para telas com largura de até 768 pixels */
    grid-template-columns: 1fr;
  }
`;

export const ShowcaseContainer = styled.section`
  /* Estilos gerais para a seção de showcase */
`;
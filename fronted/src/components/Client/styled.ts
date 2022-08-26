import styled from "styled-components";

export const Container = styled.div`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  height: 100%;
  position: relative;
  background-color: rgb(255, 255, 255);
`;

export const ContainerCard = styled.div`

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-content: center;
  align-content: center;
  width: 80%;
  padding: 3rem 1rem;
  margin-top: 6rem;


@media (max-width: 950px) {
  
    grid-template-columns: 1fr 1fr;
  
}

  @media (max-width: 630px) {
     
      grid-template-columns: 1fr;
    
}

`;

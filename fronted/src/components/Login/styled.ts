import styled from "styled-components";

export const ContainerLogin = styled.div`

  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const LeftContent = styled.div`

  width: 45vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(pizza.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;

`;

export const RightContent = styled.div`

  width: 45vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(PZFATIA.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right top;

`;

export const CardForm = styled.div`

  background-color: #fff;
  min-width: 30vw;
  min-height: 70vh;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 8px;
  opacity: 98%;

  &h1{

  font-weight: 600;
  margin-bottom: 2rem;
  position: relative;

  }

  &h1::before {
  content: "";
  position: absolute;
  height: 4px;
  width: 25px;
  bottom: 3px;
  left: 0;
  border-radius: 8px;
  background-color: #ea1d2c;
}

`;

export const FormCard = styled.form`

  display: flex;
  flex-direction: column;

`;

export const InputColection = styled.div`
  position: relative;

  &:input {
  outline: none;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  border: none;
  width: 90%;
}


`;

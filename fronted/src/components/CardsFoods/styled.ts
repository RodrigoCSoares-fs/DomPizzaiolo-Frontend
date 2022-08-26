import styled from "styled-components";

export const Card = styled.div`
  .Card {
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.2rem;
    color: #141414;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .Card:hover {
    box-shadow: #ea1d2c 0px 1px 4px;
    transition: background-color 0.3s;
  }

  h1 {
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 400;
  }

  .Card-image {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Card-image img {
    width: 100%;
    height: 10rem;
  }

  .Card-price{
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  }

  .Card-price a{ 
    border: none;
    padding: 1rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.5rem 0;
    width: 40%;
    height: 1.875rem;
    transition: .1s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color:white;
    cursor: pointer;
    background-color: #ea1d2c;
    font-size: small;
    text-decoration: none;
    color:white;
    margin-left: 6.5rem;
  }

`;

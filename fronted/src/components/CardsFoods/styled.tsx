import styled from "styled-components";

export const Card = styled.div`
  .Card {
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.2rem;
    color: #141414;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .Card:hover {
    background-color: #e94343;
    color: white;
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
`;

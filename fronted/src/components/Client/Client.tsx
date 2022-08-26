import { Navegation } from "../Navegation/Navegation";
import { CardsFoods } from "../CardsFoods/CardsFoods";
import { Container, ContainerCard } from "./styled";

export function Client() {
  return (
    <Container>
      <Navegation />

      <ContainerCard>
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
        <CardsFoods />
      </ContainerCard>
    </Container>
  );
}

import { Card } from "./styled";

interface Card {
  image: string;
}

export function CardsFoods() {
  return (
    <Card>
      <div className="Card">
        <div className="Card-image"></div>
        <div className="card-title">
          <h1>Pizza Napoli</h1>
        </div>

        <div className="Card-price">
          <div>R$50,00</div>
          <a href="#">Adicionar</a>
        </div>
      </div>
    </Card>
  );
}

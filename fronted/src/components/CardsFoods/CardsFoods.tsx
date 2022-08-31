import { Card } from "./styled";

export function CardsFoods() {
  return (
    <Card>
      <div className="Card">
        <div className="Card-image">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
        </div>
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

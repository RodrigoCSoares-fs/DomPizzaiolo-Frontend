import "./Client.css";

import { Navegation } from "../Navegation/Navegation";
import { CardsFoods } from "../CardsFoods/CardsFoods";

export function Client() {
  return (
    <div className="Foods">
      <Navegation />

      <div className="Cards-Foods-Global">
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
      </div>
    </div>
  );
}

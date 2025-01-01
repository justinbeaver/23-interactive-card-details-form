import { CardFront } from "@/components/CardFront/CardFront";
import { CardBack } from "@/components/CardBack/CardBack";

import s from "./CardsBlock.module.scss";

export const CardsBlock = ({ cardholder, number, month, year, cvc }) => {
  return (
    <div className={s.cards}>
      <CardBack cvc={cvc} />
      <CardFront
        cardholder={cardholder.trim()}
        number={number}
        month={month}
        year={year}
      />
    </div>
  );
};

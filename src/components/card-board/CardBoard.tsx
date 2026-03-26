import type React from "react";
import "./card-board.css";

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

function CardBoard({ children, header }: Props) {
  return (
    <div id="card-board">
      {header && <div className="card-board__header">{header}</div>}
      <div className="card-board__content">{children}</div>
    </div>
  );
}

export default CardBoard;

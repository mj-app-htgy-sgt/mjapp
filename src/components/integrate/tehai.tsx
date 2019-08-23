import * as React from "react";
import Pai from "../unit/pai";

interface Props{
  pais: string[],
  playerNum: number,
  handlePaiClick? : (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void 
};

const Tehai = ( { pais, playerNum, handlePaiClick } : Props ) => {
  return (
    <div className={'tehai'}>
      {
        pais.map((v, i) => 
        (playerNum === 0) ?
          <a href='#' onClick={handlePaiClick} tabIndex={i} key={i} >
            <Pai paiType={v} isClosed={false} />
          </a>
        : <Pai paiType={v} isClosed={true} key={i} />
        )
      }
    </div>
  );
}

export default Tehai;

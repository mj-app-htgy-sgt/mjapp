import * as React from "react";
import Pai from "../unit/pai";

interface Props{
    pais: string[],
    playerNum: number,
};

const Kawa = ( { pais, playerNum } : Props ) => {
    return (
        <div className={'kawa'}>
            {pais.map((v, i) => <Pai paiType={v} key={i} />)}
        </div>
    );
}

export default Kawa;
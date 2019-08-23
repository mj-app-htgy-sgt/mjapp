import * as React from "react";
import Tehai from './tehai';
import Kawa from './kawa';
import Yama from './yama';

interface Props {
    playerNum: number,
    yama: string[],
    wanpai?: string[],
    kawa: string[],
    tehai: string[],
    handlePaiClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, num: number) => void,
}

const PlayerBox = ({ playerNum, yama, wanpai, kawa, tehai, handlePaiClick }: Props ) => {
    console.log('yama',yama);
    return(
      <>
        <Kawa pais={kawa} playerNum={playerNum} />
        <Yama key={playerNum} pais={yama} wanPai={wanpai} />
        <Tehai 
          pais={tehai}
          playerNum={playerNum} 
          handlePaiClick={ 
            handlePaiClick ? (event) => handlePaiClick(event, playerNum)
                           : undefined
          } 
        />
      </>
    )
}

export default PlayerBox;
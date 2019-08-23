import * as React from "react";

interface Props {
    handleTsumoClick? : (event: React.MouseEvent<HTMLButtonElement>) => void,
    isActive : boolean,
}

const NakiBox = ( { handleTsumoClick, isActive } : Props ) => {
    return (
    <div className='nakiBox'>

        鳴き
        <button 
            value='tsumo' 
            onClick={isActive ? handleTsumoClick : undefined} 
            className={isActive ? '' : ''}
        >ツモ
        </button>
        <button 
            value='pon' 
        >ポン
        </button>
        <button 
            value='kan'
        >カン
        </button>
        <button 
            value='chi'
        >チー
        </button>
        <button 
            value='ron'
        >ロン
        </button>
    </div>
    )
}

export default NakiBox;
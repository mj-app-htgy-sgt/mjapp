import * as React from "react";
import Pai from "../unit/pai";

interface Props{
    pais: string[],
    wanPai?: string[]
};

const Yama = ( { pais, wanPai } : Props ) => {
    let upperPais: any = [];
    let downerPais: any = [];
    if (pais.length > 0) {
        pais.map((v, i) => {
            (i % 2 === 1) ? upperPais.push(<Pai paiType={v} isClosed={true} />)
                          : downerPais.push(<Pai paiType={v} isClosed={true} />)
        });
    }
    let upperWanPais: any = [];
    let downerWaPais: any = [];
    if (wanPai !== undefined) {
        wanPai.map((v, i) => {
            (i % 2 === 1) ? upperWanPais.push(<Pai paiType={v} isClosed={i!==5} />)
                          : downerWaPais.push(<Pai paiType={v} isClosed={true} />)
        });
    }
    return (
        <>
        <div className={'yama'}>
            <div className={'upper'}>{upperPais}</div>
            <div className={'downer'}>{downerPais}</div>
        </div>
        <div className={'wanPai'}>
            <div className={'upper'}>{upperWanPais}</div>
            <div className={'downer'}>{downerWaPais}</div>
        </div>
        </>
    );
}

export default Yama;

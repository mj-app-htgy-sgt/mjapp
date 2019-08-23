import * as React from "react";
import Pai from "../../unit/pai";

interface Props{
    from: number, // 0: 上家, 1: 対面, 2: 下家
    paiType: string,
};

const Pon = ({ from, paiType } : Props ) => {
    let val = [];
    for (let index = 0; index < 3; index++) {
        index === from
            ? val.push(<Pai paiType={paiType}　isSideways={true} />)
            : val.push(<Pai paiType={paiType} />);
    }
    return (
        <>{val}</>
    );
}

export default Pon;
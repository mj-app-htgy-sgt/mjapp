import * as React from "react";
import Pai from "../../unit/pai";

interface Props{
    from: number, // 0: 上家, 1: 対面, 2: 下家
    paiType: string,
};

const Minkan = ({ from, paiType } : Props ) => {
    let val = [];
    for (let index = 0; index < 4; index++) {
        index === from
            ? val.push(<Pai paiType={paiType} isSideways={true} />)
            : val.push(<Pai paiType={paiType} isSideways={false} />);
    }
    return (
        <>{val}</>
    );
}

export default Minkan;
import * as React from "react";
import Pai from "../../unit/pai";

interface Props{
    from: number, // 0: 上家, 1: 対面, 2: 下家
    teHaiType1: string,
    teHaiType2: string,
    chiPaiType: string,
};

const Chi = ({ from, teHaiType1, teHaiType2, chiPaiType } : Props ) => {
    let val = [];
    switch(from) {
        case 0 : 
            val.push(<Pai paiType={chiPaiType} isSideways={true} />);
            val.push(<Pai paiType={teHaiType1} isSideways={false} />);
            val.push(<Pai paiType={teHaiType2} isSideways={false} />);
            break;
        case 1 : 
            val.push(<Pai paiType={teHaiType1} isSideways={false} />);
            val.push(<Pai paiType={chiPaiType} isSideways={true} />);
            val.push(<Pai paiType={teHaiType2} isSideways={false} />);
            break;
        case 2 : 
            val.push(<Pai paiType={teHaiType1} isSideways={false} />);
            val.push(<Pai paiType={teHaiType2} isSideways={false} />);
            val.push(<Pai paiType={chiPaiType} isSideways={true} />);
            break;
        default : break;
    }

    return (
        <>{val}</>
    );
}

export default Chi;
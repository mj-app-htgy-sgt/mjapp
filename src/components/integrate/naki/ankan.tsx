import * as React from "react";
import Pai from "../../unit/pai";

interface Props{
    paiType: string,
};

const Ankan = ( { paiType } : Props ) => {
    let val = [];
    val.push(<Pai paiType={paiType} isClosed={true} />);
    val.push(<Pai paiType={paiType} isClosed={false} />);
    val.push(<Pai paiType={paiType} isClosed={false} />);
    val.push(<Pai paiType={paiType} isClosed={true} />);
    
    return (
        <>{val}</>
    );
}

export default Ankan;
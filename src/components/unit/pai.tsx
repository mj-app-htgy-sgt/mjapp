import * as React from "react";

interface Props{
    paiType: string,
    isClosed?: boolean,
    isSideways?: boolean,
};

const Pai = ({ paiType, isClosed, isSideways } : Props ) => {
    return(
        <i className={ 'pai '+(isClosed?'closed':paiType+(isSideways?' sideways':'')) } />
    );
};

export default Pai;
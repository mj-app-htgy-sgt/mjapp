import * as React from "react";

interface Props{
    val:string,
};

const Tenbo = ({val}:Props) => {
    return (
        <i className={'tenbo '+val} />
    );
}

export default Tenbo;
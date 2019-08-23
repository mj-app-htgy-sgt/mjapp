import * as React from "react";

interface Props {
    point: number,
    kaze: number,
}

const PlayerStatusBox = ( { point, kaze } : Props ) => {
    const strKaze = () => {
        switch (kaze) {
            case 0 : return '東';
            case 1 : return '南';
            case 2 : return '西';
            case 3 : return '北';
            default: break;
        }
    }
    return (
    <div className='playerStatus'>
        <table>
            <tbody>
                <tr><div className='kaze'>{strKaze()}</div></tr>
                <div className='point'>{point}点</div>
            </tbody>
        </table>
    </div>
    )
}

export default PlayerStatusBox;
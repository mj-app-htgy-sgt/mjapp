import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const PaiActions = {
    tsumo: actionCreator<number>('TSUMO'),
    dahai: actionCreator<number[]>('DAHAI'),
    pon: actionCreator<any[]>('PON'),
    updateCanTsumoAgari: actionCreator<number>('TSUMO_AGARI'),
    // updatePlayerTehai: actionCreator<string[]>('UPDATE_PLAYER_TEHAI'),
    updatePlayerKawa: actionCreator<string[]>('UPDATE_PLAYER_KAWA'),
    updateEnemy1Tehai: actionCreator<string[]>('UPDATE_ENEMY1_TEHAI'),
    updateEnemy1Kawa: actionCreator<string[]>('UPDATE_ENEMY1_KAWA'),
    updateEnemy2Tehai: actionCreator<string[]>('UPDATE_ENEMY2_TEHAI'),
    updateEnemy2Kawa: actionCreator<string[]>('UPDATE_ENEMY2_KAWA'),
    updateEnemy3Tehai: actionCreator<string[]>('UPDATE_ENEMY3_TEHAI'),
    updateEnemy3Kawa: actionCreator<string[]>('UPDATE_ENEMY3_KAWA'),    
}
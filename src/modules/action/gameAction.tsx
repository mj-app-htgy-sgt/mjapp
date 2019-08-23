import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const GameActions = {
    updateGameRound: actionCreator<number[]>('UPDATE_GAME_ROUND'),
    updateTurnPlayer: actionCreator<number>('UPDATE_TURN_PLAYER'),
    updateTurn: actionCreator<number>('UPDATE_TURN'),  
    updateDisplayMode: actionCreator<number>('UPDATE_DISPLAY_MODE'),   
}
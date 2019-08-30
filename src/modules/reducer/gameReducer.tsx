import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { GameActions } from '../action/gameAction';

export interface GameState {
    gameRound: number[], // [場数,本場]　0～3:東場, 4～7:南場
    turnPlayer: number, // 手番 0:player, 1:com1, 2:com2, 3:com3
    turn: number, // 0:ツモ前, 1:ツモ後, 2:打牌後, 3:鳴き確認後, 99:終了
    gameSpeed: number,
    displayMode: number,
}

const initialState: GameState = {
    gameRound: [0, 1],
    turnPlayer: 99,
    turn: -1,
    gameSpeed: 100,
    displayMode: 0,
}

export const GameReducer = reducerWithInitialState(initialState)
    .case(GameActions.updateGameRound, (state, round) => {
        return Object.assign({}, state, {round});
    })
    .case(GameActions.updateTurnPlayer, (state, turnPlayer) => {
        return Object.assign({}, state, {turnPlayer});
    })
    .case(GameActions.updateTurn, (state, turn) => {
        return Object.assign({}, state, {turn});
    })
    .case(GameActions.updateDisplayMode, (state, mode) => {
        return Object.assign({}, state, {mode});
    })
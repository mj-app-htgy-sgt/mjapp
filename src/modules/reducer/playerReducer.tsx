import { reducerWithInitialState } from 'typescript-fsa-reducers'
import PaiUtil from '../utils/paiUtil';
import { PaiState } from './paiReducer';
import { PlayerActions } from '../action/playerAction';
import Judge from '../utils/judge';

export interface PlayerState {
    playerNum: number[],
    playerName: { [key: number]: string; },
    playerPoint: { [key: number]: number; },
    playerKaze: { [key: number]: number; },
}

let paiUtil = new PaiUtil();

const initialState: PlayerState = {
    playerNum: paiUtil.players.playerNum,
    playerName: paiUtil.players.playerName,
    playerPoint: paiUtil.players.playerPoint,
    playerKaze: paiUtil.players.playerKaze,
}

let judge = new Judge();

export const PlayerReducer = reducerWithInitialState(initialState)
    // .case(PlayerActions.tsumo, (state, pai) => {
    //     console.log(state)
    //     return Object.assign({}, state, pai);
    // })
    // .case(PlayerActions.tsumo, (state, playerNum) => {
    //     paiUtil.tsumo(playerNum);
    //     return Object.assign({}, state, {playerNum})
    // })
    // .case(PlayerActions.updateYama, (state, yama) => {
    //     return Object.assign({}, state, {yama});
    // })
    // .case(PlayerActions.updatePlayerTehai, (state, tehai) => {
    //     return Object.assign({}, state, {tehai});
    // })
    // .case(PlayerActions.updatePlayerKawa, (state, kawa) => {
    //     return Object.assign({}, state, {kawa});
    // })
    // .case(PlayerActions.updatePlayerPonHai, (state, ponHai) => {
    //     return Object.assign({}, state, {ponHai});
    // })
    // .case(PlayerActions.updatePlayerChiHai, (state, chiHai) => {
    //     return Object.assign({}, state, {chiHai});
    // })
    // .case(PlayerActions.updatePlayerKanHai, (state, kanHai) => {
    //     return Object.assign({}, state, {kanHai});
    // })
    ;
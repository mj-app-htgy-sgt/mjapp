import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { PaiActions } from '../action/paiAction';
import PaiUtil from '../utils/paiUtil';

export interface PaiState {
    yama: string[],
    dorahyoujiHai: string[],
    wanPai: string[],
    Tehai: { [key: number]: string[]; },
    Ponhai: { [key: number]: string[]; },
    Chihai: { [key: number]: string[]; },
    Kanhai: { [key: number]: string[]; },
    Kawa: { [key: number]: string[]; },
    tsumoAgari: number[],
}

let paiUtil = new PaiUtil();

const initialState: PaiState = {
    yama: paiUtil.pai.yama,
    dorahyoujiHai: paiUtil.pai.dorahyoujiHai,
    wanPai: paiUtil.pai.wanPai,
    Tehai: paiUtil.pai.Tehai,
    Ponhai: [],
    Chihai: [],
    Kanhai: [],
    Kawa: paiUtil.pai.Kawa,
    tsumoAgari: paiUtil.pai.tsumoAgari,
}

export const PaiReducer = reducerWithInitialState(initialState)
    .case(PaiActions.tsumo, (state, playerNum) => {
        console.debug(PaiActions.tsumo + 'before state', state);
        paiUtil.tsumo(playerNum);
        console.debug(PaiActions.tsumo + 'after state', paiUtil.pai);
        return paiUtil.pai;
    })
    .case(PaiActions.dahai, (state, payload) => {
        console.debug(PaiActions.dahai + 'before state', state);
        paiUtil.dahai(payload[0], payload[1]);
        console.debug(PaiActions.dahai + 'after state', paiUtil.pai);
        return paiUtil.pai;
    })
    .case(PaiActions.pon, (state, payload) => {
        console.debug(PaiActions.pon + 'before state', state);
        paiUtil.pon(payload[0], payload[1], payload[2]);
        console.debug(PaiActions.pon + 'after state', paiUtil.pai);
        return paiUtil.pai;
    })
    .case(PaiActions.updateCanTsumoAgari, (state, payload) => {
        state.tsumoAgari[payload] = 1
        return Object.create(state);
    })

    .case(PaiActions.updatePlayerKawa, (state, kawa) => {
        return Object.assign({}, state, {kawa});
    })
    .case(PaiActions.updateEnemy1Tehai, (state, tehai) => {
        return Object.assign({}, state, {tehai});
    })
    .case(PaiActions.updateEnemy1Kawa, (state, kawa) => {
        return Object.assign({}, state, {kawa});
    })
    .case(PaiActions.updateEnemy2Tehai, (state, tehai) => {
        return Object.assign({}, state, {tehai});
    })
    .case(PaiActions.updateEnemy2Kawa, (state, kawa) => {
        return Object.assign({}, state, {kawa});
    })
    .case(PaiActions.updateEnemy3Tehai, (state, tehai) => {
        return Object.assign({}, state, {tehai});
    })
    .case(PaiActions.updateEnemy3Kawa, (state, kawa) => {
        return Object.assign({}, state, {kawa});
    })
    ;
    
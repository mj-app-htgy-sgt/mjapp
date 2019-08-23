import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { PaiActions } from "../modules/action/paiAction";
import { AppState } from "../modules/store/store";
import { connect } from "react-redux";
import PlayerComponent from '../components/playerComponent'
import { GameActions } from "../modules/action/gameAction";

export interface PlayerActions {
    tsumo: (v: number) => Action<number>;
    dahai: (v: number[]) => Action<{[key: number]: number;}>;

    updateTurnPlayer: (v: number) => Action<number>;
    updateTurn: (v: number) => Action<number>;

    updateCanTsumoAgari: (v: number) => Action<number>;
    updateDisplayMode: (v: number) => Action<number>
}

function mapDispatchToProp(dispatch: Dispatch<Action<any>>) {
    return {
        tsumo: (v: number) => dispatch(PaiActions.tsumo(v)),
        dahai: (v: number[]) => dispatch(PaiActions.dahai(v)),
        updateCanTsumoAgari: (v: number) => dispatch(PaiActions.updateCanTsumoAgari(v)),

        updateTurnPlayer: (v: number) => dispatch(GameActions.updateTurnPlayer(v)),
        updateTurn: (v: number) => dispatch(GameActions.updateTurn(v)),
        updateDisplayMode: (v: number) => dispatch(GameActions.updateDisplayMode(v)),

    }
}

function mapStateToProps(appState: AppState) {
    return Object.assign({}, appState.pai, appState.player, appState.game);
    //Object.assign({}, appState.pai, appState.player);
}

export default connect(mapStateToProps, mapDispatchToProp)(PlayerComponent);
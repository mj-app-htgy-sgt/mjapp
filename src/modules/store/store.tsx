import { createStore, combineReducers } from "redux";
import { GameState, GameReducer } from "../reducer/gameReducer";
import { PaiReducer, PaiState } from "../reducer/paiReducer";
import { PlayerState, PlayerReducer } from "../reducer/playerReducer";


export type AppState = {
    game: GameState
    pai: PaiState
    player: PlayerState
};

const Store = createStore(
    combineReducers<AppState>({
        game: GameReducer,
        pai: PaiReducer,
        player: PlayerReducer,
    })
);

export default Store;
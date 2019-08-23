import * as React from 'react';
import { PlayerState } from '../modules/reducer/playerReducer';
import { PlayerActions } from '../containers/playerContainer';
import NakiBox from './integrate/nakiBox';
import { PaiState } from '../modules/reducer/paiReducer';
import { GameState } from '../modules/reducer/gameReducer';
import Judge from '../modules/utils/judge';
import PlayerBox from './integrate/playerBox';

interface OwnProps {}

type PlayerProps = OwnProps & PlayerState & PlayerActions & PaiState & GameState ;
// type States = PlayerState & PaiState & GameState;

class PlayerComponent extends React.Component<PlayerProps> {
  
  // initialize
  constructor(props: PlayerProps) {
    super(props);
  }

  // 初期表示時の処理
  componentDidMount() {
    console.log('--component did mount--');
    const { turnPlayer, tsumo, updateTurn, playerKaze, updateTurnPlayer } = this.props;
    for(let i = 0; i < 4; i++) {
      if(playerKaze[i] === 0) {
        updateTurnPlayer(i);
        tsumo(i);
        break;
      }
    }
    updateTurn(1);
    console.log('-player' + turnPlayer + ' tsumo-');
    this.forceUpdate();
  }
  // state更新ごとの処理
  componentDidUpdate(){
    console.log('--component did update--');
    const {
      turn, turnPlayer, tsumo, updateTurn, dahai, Tehai, yama,
      gameSpeed, Kawa, updateCanTsumoAgari, updateDisplayMode , updateTurnPlayer,
    }  = this.props
    let judge = new Judge();

    // 手巡
    switch (turn) {
    // TODO スタート画面?ボタン?の準備、設定画面の準備(特定State弄らせる画面)
    case 0: // ツモ
      setTimeout(() => {
        tsumo(turnPlayer);
        updateTurn(1);
      }, gameSpeed);
      console.log('-turn' + turn + ' player' + turnPlayer + ' tsumo-'); break;
    case 1: // ツモ後： comツモ上がり, com通常, playerツモ上がり, player通常　
            // TODO アンカンをどこに入れるか、comの思考
      if (turnPlayer !== 0 && judge.canTsumoAgari(Tehai[turnPlayer], Tehai[turnPlayer][-1])) {
        updateTurn(99);
        console.log('-turn' + turn + ' player' + turnPlayer + ' tsumoAgari-') 
      }
      else if (turnPlayer !== 0 && !judge.canTsumoAgari(Tehai[turnPlayer], Tehai[turnPlayer][-1])){
        // if (canAnkan) => ankan()
        setTimeout(() => {
          dahai([turnPlayer, Math.floor(Math.random()*Tehai[turnPlayer].length)]);
          updateTurn(2);
        });
        console.log('-turn' + turn + ' player' + turnPlayer + ' dahai-') 
      }
      else if (judge.canTsumoAgari(Tehai[turnPlayer], Tehai[turnPlayer][-1])) {
        updateCanTsumoAgari(turnPlayer);
        console.log('-turn' + turn + ' player' + turnPlayer + ' tsumoAgari-') 
      }
      else {
        // if (canAnkan) => ankan()
        console.log('-turn' + turn + ' player' + turnPlayer + ' dahai-') 
      }
      break;
    case 2: // 打牌後 ： player鳴き可能, 流局, 通常
            // TODO nakiBox表示、comの思考
      if (judge.canNaki(Tehai[0], Kawa[turnPlayer][-1], turnPlayer)) {
        console.log('-turn' + turn + ' player' + turnPlayer + ' naki-');
      }
      else if(yama.length === 0) {
        updateTurn(99);
      }
      else {
        updateTurnPlayer(turnPlayer in [0,1,2] ? turnPlayer + 1 : 0);
        updateTurn(0);
        console.log('-turn' + turn + ' player' + turnPlayer + ' change to ' + (turnPlayer + 1) +'-') 
      }
      break;
    case 99: // 局終了
             // TODO 終了処理 => 点数、局の更新、風更新、ゲームの終了
      alert('end');
      window.location.reload(true);
      break;
    default: break;
    }
  }

  // click event handler
  handlePaiClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, num: number) => {
    console.log('debug this',this)
    const { dahai, updateTurn } = this.props;
    const val: number[] = [];
    val.push(num, event.currentTarget.tabIndex)
    dahai(val);
    updateTurn(2);
    this.forceUpdate();
    console.log('pai click')
  }
  handleTsumoClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handlePonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handleChiClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handleAnkanClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handleKaKanClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handleDaiMinKanClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }
  handleNakiCancelClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
    // TODO
  }

  // 描写処理 初期表示時、state更新ごとに呼ばれる
  render() {
    const { playerNum, yama, Kawa, Tehai, turnPlayer, wanPai } = this.props;
    const yamaView = () => {
      let ret: { [ key: number ]: string[] } = {
        0:[], 1:[], 2:[], 3:[],
      };
      yama.map((v, i) => ret[Math.floor(i/28)].push(v))
      return ret;
    }
    return (
      <>
      <div id='mainTable'>
        {
          playerNum.map((v) => {  
            return (
            <div className={`playerBox${v}`}>
              <PlayerBox
                playerNum={v}
                yama={ yamaView()[v] }
                wanpai={ v === 2 ? wanPai : undefined }
                kawa={ Kawa[v] }
                tehai={ Tehai[v] }
                handlePaiClick={
                  (v === 0 && v === turnPlayer) ? this.handlePaiClick : undefined
                }
              />
            </div>
            )
          })
        }
        {/* TODO status box */}
        <div className='statusBox'>aaa</div>
      </div>
      </>
    );
  }

}

export default PlayerComponent;
import { PlayerState } from '../reducer/playerReducer';
import Judge from './judge';
import { PaiState } from '../reducer/paiReducer';

class PaiUtil {
    allPai: string[];
    dorahyoujiHai: string[];
    wanPai: string[];
    players: PlayerState;
    judge: Judge;
    pai: PaiState;

    // initialize
    constructor() {
        this.allPai = [];
        this.dorahyoujiHai = [];
        this.wanPai = [];
        this.players = Object.create({});
        this.pai = Object.create({});
        this.init();
        this.judge = new Judge();
    }
    private init() {
        this.createAllPai();
        this.shuffleAllPai();
        this.initPlayer();
        this.initPai();
        this.haipai();
        this.Oyakime();
    }
    private createAllPai() {
        for (let category of ['m','p','s','z']) {
            for (let idx = 1; idx <= (category === 'z' ? 7 : 9); idx++) {
                for (let i = 0; i < 4; i++)
                    (category !== 'z') && (i === 3) && (idx === 5) 
                    ? this.allPai.push(category + idx + ' red')
                    : this.allPai.push(category + idx)
            }
        }
    }
    private shuffleAllPai() {
        for (let index = this.allPai.length - 1; index > 0; index--) {
            const r = Math.floor(Math.random() * (index + 1));
            const tmp = this.allPai[index];
            this.allPai[index] = this.allPai[r];
            this.allPai[r] = tmp;
        }
    }
    private initPlayer() {
        this.players.playerNum = Object.create([0, 1, 2, 3]);
        this.players.playerName = Object.create({0:'you', 1:'com1', 2:'com2', 3:'com3'});
        this.players.playerKaze = Object.create({0:0, 1:1, 2:2, 3:3});
        this.players.playerPoint = Object.create({0:25000, 1:25000, 2:25000, 3:25000});
    }
    private initPai() {
        this.pai.dorahyoujiHai = Object.create([]);
        this.pai.wanPai = Object.create([]);
        this.pai.Tehai = Object.create({0:[], 1:[], 2:[], 3:[]});
        this.pai.Kawa = Object.create({0:[], 1:[], 2:[], 3:[]});
        this.pai.Ponhai = Object.create({0:[], 1:[], 2:[], 3:[]});
        this.pai.Chihai = Object.create({0:[], 1:[], 2:[], 3:[]});
        this.pai.Kanhai = Object.create({0:[], 1:[], 2:[], 3:[]});
        this.pai.tsumoAgari = Object.create({0:0, 1:0, 2:0, 3:0});
    }
    private haipai() {
        this.pai.yama = Array.from(this.allPai);
        for (let i = 0; i < 52; i++) {
            (i > 48) ? this.pai.Tehai[i%4].push(this.pai.yama[0])
                     : this.pai.Tehai[Math.floor(i/4)%4].push(this.pai.yama[0])
            this.pai.yama.shift();
        }
        for (let i = 0; i < 4; i++) {
            this.pai.Tehai[i].sort();
        }
        this.pai.wanPai = Array.from(this.pai.yama.slice(0,14));
        this.pai.dorahyoujiHai.push(this.pai.wanPai[5]) ;
        this.pai.yama.splice(0, 14);
    }
    private Oyakime() {
        const oya = Math.floor(Math.random() * 4)
        console.log('oya',oya);
        for(let i = 0; i < 4; i++) {
            this.players.playerKaze[(4+i-oya)%4] = i
        }
    }

    // // player action
    tsumo(idx: number) {
        this.pai.Tehai[idx].push(this.pai.yama[0]);
        this.pai.yama.shift();
    }
    dahai(idx: number, haipaiIdx: number) {
        this.pai.Kawa[idx].push(this.pai.Tehai[idx][haipaiIdx]);
        this.pai.Tehai[idx].splice(haipaiIdx, 1);
        this.pai.Tehai[idx].sort();
    }
    pon(idx: number, ponHai: string, from: number){
        if(!this.judge.canPon(this.pai.Tehai[idx], ponHai))
            throw console.error('ポンできません');
        this.pai.Tehai[idx].splice(this.pai.Tehai[idx].findIndex((v) => v === ponHai), 2);
        this.pai.Ponhai[idx].push(ponHai, ponHai, ponHai);
        this.pai.Kawa[from].pop();
    }
    // chi(idx: number, chiHai: string, from: number){
    //     if(!this.judge.canChi(this.players[idx].playerTehai, chiHai))
    //         throw console.error('チーできません');
    //     this.players[idx].playerTehai.splice(this.players[idx].playerTehai.findIndex((v) => v === chiHai), 2);
    //     this.players[idx].playerPonHai.push(chiHai, chiHai, chiHai);
    //     this.players[from].playerKawa.pop();
    // }
    // ankan(idx: number, kanHai: string) {
    //     if(!this.judge.canAnKan(this.players[idx].playerTehai, kanHai))
    //         throw console.error('カンできません');
    //     this.players[idx].playerTehai.splice(this.players[idx].playerTehai.findIndex((v) => v === kanHai), 4);
    //     this.players[idx].playerKanHai.push(kanHai, kanHai, kanHai, kanHai);
    // }
    // daiMinkan(idx: number, kanHai: string, from: number){
    //     if(!this.judge.canDaiMinkan(this.players[idx].playerTehai, kanHai))
    //         throw console.error('カンできません');
    //     this.players[idx].playerTehai.splice(this.players[idx].playerTehai.findIndex((v) => v === kanHai), 3);
    //     this.players[idx].playerKanHai.push(kanHai, kanHai, kanHai, kanHai);
    //     this.players[from].playerKawa.pop();
    // }
    // kakan(idx: number, kanHai: string) {
    //     if(!this.judge.canKaKan(this.players[idx].playerTehai, this.players[idx].playerPonHai, kanHai))
    //         throw console.error('カンできません');
    //     this.players[idx].playerTehai.splice(this.players[idx].playerTehai.findIndex((v) => v === kanHai), 1);
    //     this.players[idx].playerPonHai.splice(this.players[idx].playerPonHai.findIndex((v) => v === kanHai), 3);
    //     this.players[idx].playerKanHai.push(kanHai, kanHai, kanHai, kanHai);
    // }
    // agari(idx: number, tehai: string[], agariHai: string, from: number) {
    //     if(!this.judge.canAgari(tehai,agariHai,from))
    //         throw console.error('上がれません');
    //     console.log('勝者',this.players[idx]);
    // }
}

export default PaiUtil;
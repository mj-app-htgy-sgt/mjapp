class Judge {
    category: string[];
    chiPattern: { [ key: number ]: number[][] };
    yaochuhai: number[];
    jihai: number[];
    idx_tehai: number[]
    tmp_idx_tehai: number[];
    idx: number;

    constructor() {
        this.category = ['m', 'p', 's', 'z'];
        this.chiPattern = {
            0 : [ [1,2] ],
            1 : [ [0,2], [2,3] ],
            2 : [ [0,1], [1,3], [3,4] ],
            3 : [ [1,2], [2,4], [4,5] ],
            4 : [ [2,3], [3,5], [5,6] ],
            5 : [ [3,4], [4,6], [6,7] ],
            6 : [ [4,5], [5,7], [7,8] ],
            7 : [ [5,6], [6,8] ],
            8 : [ [6,7] ],
        };
        this.yaochuhai = [1,9,11,19,21,29];
        this.jihai = [31,32,33,34,35,36,37];
        this.idx_tehai = [];
        this.tmp_idx_tehai = [];
        this.idx = -1;
    }

    // public method
    // 上がり判定
    canTsumoAgari(tehai: string[], agariHai?: string) {
        let { idx_tehai , tmp_idx_tehai } = this;
        const { init, convertTehai, resetTmp, checkKotsu, checkShuntsu, isChitoitsu, isKokushi } = this;
        init();
        convertTehai(tehai);
        for (let i = 0; i < 38; i++){
            if (idx_tehai[i] >= 2) {
                //順子抜き→刻子抜き
                tmp_idx_tehai = resetTmp(idx_tehai, i);
                tmp_idx_tehai = checkShuntsu(tmp_idx_tehai);
                tmp_idx_tehai = checkKotsu(tmp_idx_tehai);
                if (tmp_idx_tehai.every(v => v === 0)) return true;
                //刻子抜き→順子抜き
                tmp_idx_tehai = resetTmp(idx_tehai,i);               
                tmp_idx_tehai = checkKotsu(tmp_idx_tehai);
                tmp_idx_tehai = checkShuntsu(tmp_idx_tehai);
                if (tmp_idx_tehai.every(v => v === 0)) return true;
            }
        }
        //七対子
        if (isChitoitsu(idx_tehai)) return true;
        //国士無双
        if (isKokushi(idx_tehai)) return true;
        return false;
    }
    canRonAgari(tehai: string[], agariHai: string, from: number) {
        let tmpTehai: string[] = Array.from(tehai).concat(agariHai);
        return this.canTsumoAgari(tmpTehai, agariHai);
    }
    // 鳴き判定
    canNaki(tehai: string[], suteHai: string, from: number) {
        return this.canPon(tehai, suteHai) || 
               this.canDaiMinkan(tehai, suteHai) || 
               this.canChi(tehai, suteHai, from);
    }
    canAnKan(tehai: string[], kanHai: string) {
        return tehai.filter((v) => v === kanHai).length = 4;
    }
    canKaKan(tehai: string[], ponHai: string[], kanHai: string) {
        return (tehai.filter((v) => v === kanHai).length = 1) && 
               (ponHai.filter((v) => v === kanHai).length = 3);
    }
    canPon(tehai: string[], suteHai: string) {
        return tehai.filter((v) => v === suteHai).length > 1;
    }
    canDaiMinkan(tehai: string[], suteHai: string) {
        return tehai.filter((v) => v === suteHai).length = 3;
    }
    canChi(tehai: string[], suteHai: string, from: number){
        if (from !== 3) return false; 
        let ret = [];
        const sutehaiCategory = suteHai.slice(0,1);
        if (sutehaiCategory === 'z') return false;
        const sutehaiNum = +suteHai.slice(1);       
        let tmp = tehai.filter((v) => v.slice(0,1) === sutehaiCategory)
                       .map(str => parseInt(str, 10));
        if(this.chiPattern[sutehaiNum]) {
            this.chiPattern[sutehaiNum].forEach(v => {
                if(tmp.includes(v[0])&&tmp.includes(v[0])) ret.push(v); 
            });
        }
        return ret.length > 0
    }

    // private method
    // utility
    private init = () => {
        this.idx_tehai.fill(0);
        this.tmp_idx_tehai.length = 0;
        this.idx = -1;
    }
    private resetTmp = (arr: number[], i: number) => {
        let tmp_arr = Array.from(arr)
        tmp_arr[i] -= 2;
        return tmp_arr;
    };
    private checkShuntsu = (arr: number[]) => {
        for (let i = 1; i < 38 - 10; i++){
            if (i % 10 > 7) continue;
            while (arr[i] > 0 && arr[i + 1] > 0 && arr[i + 2] > 0) {
                arr[i]--; arr[i + 1]--; arr[i + 2]--;
            }
        }
        return arr;
    };
    private checkKotsu = (arr: number[]) => { 
        return arr.map(v => v % 3);
    };
    private convertTehai = (tehai: string[]) => {
        let { idx, idx_tehai } = this;
        tehai.forEach(v => {
            idx = parseInt(v.replace(/[mpsz]/g, (match) => {
                const escape: { [key: string]: string } = {
                    'm': '',
                    'p': '20',
                    's': '10',
                    'z': '30',
                };
                return escape[match];
            }), 10);
            idx_tehai[idx] += 1;
        });
    }
  
    // 役判定
    private isChitoitsu = (arr: number[]) => {
        for (let i = 1; i < 38; i++){
            if (arr[i] > 1) arr[i] -= 2;
        }
        return arr.every(v => v === 0);
    };
    private isKokushi = (arr: number[]) => {
        let atama = false;
        for (let i = 1; i < 38; i++) {
            if(i in this.jihai || i in this.yaochuhai) {
                if(!atama && arr[i] === 2) {
                    arr[i] -= 2;
                    atama = true;
                }
                else if(arr[i] === 1) {
                    arr[i] -= 1;
                }
            }
        }
        return arr.every(v => v === 0);
    }
    private isRichi(tehai: string[], agariHai: string) {
        return true;
    }
    private isMenzenTsumo(tehai: string[], agariHai: string) {
        return true;
    }
    private isPinhu(tehai: string[], agariHai: string) {
        return true;
    }
    private isTannyao(tehai: string[], agariHai: string) {
        let { idx_tehai } = this;
        const { init, convertTehai, yaochuhai, jihai } = this;
        init();
        convertTehai(tehai);
        return idx_tehai.every(v => !(v in yaochuhai) && !(v in jihai));
    }
    private isIpeko(tehai: string[], agariHai: string) {
        return true;
    }
    private isToitoiho(tehai: string[], agariHai: string) {
        return true;
    }
    private isSanshokuDoujun(tehai: string[], agariHai: string) {
        return true;
    }
  }
  export default Judge;
class Judge {
    category: string[];
    chiPattern: { [ key: number ]: number[][] };
  
    constructor() {
        this.category = ['m', 'p', 's', 'z']
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
    }
  
    toituCount(tehai: string[]) {
        // let toitu = tehai.filter((v, i, self) => self.indexOf(v) !== i);
    }
  
    // TODO
    // 鳴き・上がり判定
    canNaki(tehai: string[], suteHai: string, from: number) {
        return false;
        // return this.canPon(tehai, suteHai) || this.canDaiMinkan(tehai, suteHai) || this.canChi(tehai, suteHai, from);
    }
    canTsumoAgari(tehai: string[], agariHai: string) {
        let idx_tehai:number[] = Array(38).fill(0);
        let tmp_idx_tehai:number[];
        let idx:number;
  
        const Reset_tmp = (arr:number[],i:number) => {
            let tmp_arr = arr.concat();
            tmp_arr[i] -= 2;
            return tmp_arr;
        };
        const Check_shuntsu = (arr:number[]) => {
            for (let i = 1; i < 38 - 10; i++){
                if (i % 10 > 7) continue;
                while(arr[i] > 0 && arr[i + 1] > 0 && arr[i + 2] > 0) {
                    arr[i]--; arr[i + 1]--; arr[i + 2]--;
                }
            }
            return arr;
        };
        const Check_kotsu = (arr:number[]) => { 
            return arr.map( v => v % 3);
         };
        const Check_7toitsu = (arr:number[]) => {
            for (let i = 1; i < 38; i++){
                if (arr[i] > 1)
                    arr[i] %= 2;
            }
            if (arr.every(v => v === 0))
                return true;
            else
                return false;
        };
        const Check_kokushi = (arr:number[]) => {
            let atama = false;
            for (let i = 1; i < 38; i++) {
                switch(i) {
                case 1: case 9: case 11: case 19: case 21: case 29: 
                case 31: case 32: case 33: case 34: case 35: case 36: case 37:
                    if (!atama && arr[i] == 2) {
                        arr[i] -= 2;
                        atama = true;
                    } else if (arr[i] == 1) {
                        arr[i] -= 1;
                    }
                    break;
                default:
                    break;
                }
            }
            if (arr.every(v => v === 0))
                return true;
            else
                return false;
        }
  
        tehai.forEach(v => {
            idx = parseInt(v.slice(-1)) + ( vv => {
                switch(vv.slice(0,1)) {
                case "s":
                    return 10;
                case "p":
                    return 20;
                case "z":
                    return 30;
                case "m":
                default :
                    return 0;
                }
            })(v);
            idx_tehai[idx] += 1;
        });
        
        for (let i = 0; i < 38; i++){
            if (idx_tehai[i] >= 2) {
  
                //順子抜き→刻子抜き
                tmp_idx_tehai = Reset_tmp(idx_tehai,i);
                tmp_idx_tehai = Check_shuntsu(tmp_idx_tehai);
                tmp_idx_tehai = Check_kotsu(tmp_idx_tehai);
                if (tmp_idx_tehai.every(v => v === 0)) 
                    return true;
                
                //刻子抜き→順子抜き
                tmp_idx_tehai = Reset_tmp(idx_tehai,i);               
                tmp_idx_tehai = Check_kotsu(tmp_idx_tehai);
                tmp_idx_tehai = Check_shuntsu(tmp_idx_tehai);
                if (tmp_idx_tehai.every(v => v === 0)) 
                    return true;
  
                //七対子
                tmp_idx_tehai = Reset_tmp(idx_tehai,i);
                if (Check_7toitsu(tmp_idx_tehai)) 
                    return true;
  
                //国士無双
                if (Check_kokushi(idx_tehai)) 
                    return true;
            }
        }
        return false;
    }
    canRonAgari(tehai: string[], agariHai: string, from: number) {
        return false;
    }
    canPon(tehai: string[], suteHai: string) {
        return tehai.filter((v) => v = suteHai).length > 1;
    }
    canDaiMinkan(tehai: string[], suteHai: string) {
        return tehai.filter((v) => v = suteHai).length = 3;
    }
    canChi(tehai: string[], suteHai: string, from: number){
        if (from !== 3) return false; //上家じゃなかったら
        let ret = [];
        const sutehaiCategory = suteHai.slice(0,1);
        //if (sutehaiCategory === 'z') return false;
        const sutehaiNum = +suteHai.slice(1);       
        let tmp = tehai.filter((v) => v.slice(0,1) === sutehaiCategory).map(str => parseInt(str, 10)); 
        console.log(tmp);
        if(this.chiPattern[sutehaiNum]) {
            this.chiPattern[sutehaiNum].forEach(v => {
                if(tmp.includes(v[0])&&tmp.includes(v[0])) ret.push(v); 
            });
        }
        return ret.length > 0
    }
    canAnKan(tehai: string[], kanHai: string) {
        return tehai.filter((v) => kanHai).length = 4;
    }
    canKaKan(tehai: string[], ponHai: string[], kanHai: string) {
        return (tehai.filter((v) => v = kanHai).length = 1)
            && (ponHai.filter((v) => v = kanHai).length = 3);
    }
  
    // 役判定
    isRichi(tehai: string[], agariHai: string) {
        return true;
    }
    isMenzenTsumo(tehai: string[], agariHai: string) {
        return true;
    }
    isPinhu(tehai: string[], agariHai: string) {
        return true;
    }
    isTannyao(tehai: string[], agariHai: string) {
        return true;
    }
    isIpeko(tehai: string[], agariHai: string) {
        return true;
    }
    isChitoitsu(tehai: string[], agariHai: string) {
        return true;
    }
    isToitoiho(tehai: string[], agariHai: string) {
        return true;
    }
    isSanshokuDoujun(tehai: string[], agariHai: string) {
        return true;
    }
  
  }
  
  // debug
  let judge = new Judge();
  let a = judge.canChi(['s1','s2'], 's3', 3);
  console.log(a);
  
  export default Judge;
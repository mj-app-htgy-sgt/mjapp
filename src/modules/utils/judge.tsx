
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
        if (from !== 3) return false;
        let ret = [];
        const sutehaiCategory = suteHai.slice(0,1);
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
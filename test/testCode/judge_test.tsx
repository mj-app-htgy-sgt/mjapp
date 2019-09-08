import Judge from '../../src/modules/utils/judge';
import * as util from '../testUtil';
import * as tsumoAgari from '../testData/judge/tsumoAgari';
import * as ronAgari from '../testData/judge/ronAgari';

const judge = new Judge();

////// public method
  //// -- canTsumoAgari --
    // NORMAL TEST
      // TRUE PATTERN
      let tsumoAgari_1 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_1, tsumoAgari.agarihai);
      let tsumoAgari_2 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_2, tsumoAgari.agarihai);
      let tsumoAgari_3 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_3, tsumoAgari.agarihai);
      let tsumoAgari_4 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_4, tsumoAgari.agarihai);
      let tsumoAgari_5 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_5, tsumoAgari.agarihai);
      let tsumoAgari_6 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_6, tsumoAgari.agarihai);
      let tsumoAgari_7 = judge.canTsumoAgari(tsumoAgari.tsumoAgariTehai_7, tsumoAgari.agarihai);
  
      util.assert(tsumoAgari_1, true);
      util.assert(tsumoAgari_2, true);
      util.assert(tsumoAgari_3, true);
      util.assert(tsumoAgari_4, true);
      util.assert(tsumoAgari_5, true);
      util.assert(tsumoAgari_6, true);
      util.assert(tsumoAgari_7, true);
  
      // FALSE PATTERN
      // TODO
    
    // ABNORMAL TEST
    // TODO
    
  //// -- canTsumoAgari --

  
  //// -- canRonAgari --
    // NORMAL TEST
      // TRUE PATTERN
      let ronAgari_1 = judge.canRonAgari(ronAgari.ronAgariTehai_1, ronAgari.agarihai, ronAgari.from)
      let ronAgari_2 = judge.canRonAgari(ronAgari.ronAgariTehai_2, ronAgari.agarihai, ronAgari.from)
      let ronAgari_3 = judge.canRonAgari(ronAgari.ronAgariTehai_3, ronAgari.agarihai, ronAgari.from)
      let ronAgari_4 = judge.canRonAgari(ronAgari.ronAgariTehai_4, ronAgari.agarihai, ronAgari.from)
      let ronAgari_5 = judge.canRonAgari(ronAgari.ronAgariTehai_5, ronAgari.agarihai, ronAgari.from)
      let ronAgari_6 = judge.canRonAgari(ronAgari.ronAgariTehai_6, ronAgari.agarihai, ronAgari.from)
      let ronAgari_7 = judge.canRonAgari(ronAgari.ronAgariTehai_7, ronAgari.agarihai, ronAgari.from)
      
      util.assert(ronAgari_1, true);
      util.assert(ronAgari_2, true);
      util.assert(ronAgari_3, true);
      util.assert(ronAgari_4, true);
      util.assert(ronAgari_5, true);
      util.assert(ronAgari_6, true);
      util.assert(ronAgari_7, true);
      
      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO
  
  //// -- canRonAgari --
  
  
  //// -- canNaki --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO

  //// -- canNaki --


  //// -- canAnKan --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO
    
  //// -- canAnKan --


  //// -- canKaKan --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO
    
  //// -- canKaKan --


  //// -- canPon --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO

  //// -- canPon --


  //// -- canDaiMinkan --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO
    
  //// -- canDaiMinkan --


  //// -- canChi --
    // NORMAL TEST
      // TRUE PATTERN
      // TODO

      // FALSE PATTERN
      // TODO

    // ABNORMAL TEST
    // TODO
    
  //// -- canChi --
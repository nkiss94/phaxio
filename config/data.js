import { HTTP } from 'meteor/http' 

let data = {
  questrade: {
    cuid: "QSTR",
    6: 1,
    5: 1,
    2: 2
  },

  scotia: {
    cuid: "SCOS",
    5: 1 
  },

  rbc: {
    cuid: "DOMA",
    divisions: ['RBC Direct Investing', 'RBC Dominion Securities'],
    7: 1, //TFSA
    4: 1, //RRSP
    6: 1, //RRSP & NON_REG **Non-Reg has first check digit of 2**
    2: 1 //TFSA
  },

  cibc: {
    cuid: "WGDB",
    divisions: ['CIBC Investors Edge', 'CIBC Wood Gundy', 'CIBC World Markets'],
    5: 1, //RRSP, LIRA & NON_REG
    6: 1 //TFSA
  },

  edward_jones: {
    cuid: "EDJC",
    divisions: [],
    5: 1, //RRSP & TFSA
    2: 1 //NON_REG & JOINT
  },

  bmo: {
    cuid: "NTDT",
    divisions: ['BMO Investorline', 'BMO Nesbitt Burns'],
    7: 1, //TFSA & RRSP
    3: 1, //RRSP
    2: 1, //TFSA, RRSP & RRIF
    6: 1 //JOINT
  }
}

export default data;
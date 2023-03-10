import AudiEtronGTImg from "assets/data/CarImages/Audi e-tron GT.png";
import AudiEtronSSportbackImg from "assets/data/CarImages/Audi e-tron S sportback.png";
import AudiEtronSImg from "assets/data/CarImages/Audi e-tron S.png";
import AudiEtronSportbackImg from "assets/data/CarImages/Audi e-tron Sportback.jpg";
import AudiEtronImg from "assets/data/CarImages/Audi e-tron.jpg";
import AudiQ4EtronImg from "assets/data/CarImages/Audi Q4 e-tron.png";
import AudiQ4SportbackEtronImg from "assets/data/CarImages/Audi Q4 Sportback e-tron.jpg";
import BenzEQASUVImg from "assets/data/CarImages/Benz EQA SUV.png";
import BenzEQBSUVImg from "assets/data/CarImages/Benz EQB SUV.jpg";
import BenzEQESedanImg from "assets/data/CarImages/Benz EQE Sedan.jpg";
import BenzEQSSedanImg from "assets/data/CarImages/Benz EQS Sedan.png";
import BMWi4M50Img from "assets/data/CarImages/BMW i4 M50.jpg";
import BMWi4Img from "assets/data/CarImages/BMW i4.jpg";
import BMWi7Img from "assets/data/CarImages/BMW i7.png";
import BMWiXM60Img from "assets/data/CarImages/BMW iX M60.png";
import BMWiXImg from "assets/data/CarImages/BMW iX.jpg";
import BMWiX3Img from "assets/data/CarImages/BMW iX3.png";
import ChevroletBoltEvImg from "assets/data/CarImages/Chevrolet BOLT EV.png";
import GenesisG80Img from "assets/data/CarImages/Genesis G80.png";
import GenesisGV60Img from "assets/data/CarImages/Genesis GV60.png";
import GenesisGV70Img from "assets/data/CarImages/Genesis GV70.png";
import HyundaiIoniq5Img from "assets/data/CarImages/Hyundai Ioniq 5.png";
import HyundaiIoniq6Img from "assets/data/CarImages/Hyundai Ioniq 6.png";
import KiaEV6GTImg from "assets/data/CarImages/Kia EV6 GT.png";
import KiaEV6Img from "assets/data/CarImages/Kia EV6.png";
import KiaNiroEVImg from "assets/data/CarImages/Kia Niro EV.png";
import KiaNiroPlusImg from "assets/data/CarImages/Kia Niro Plus.png";
import TeslaModel3Img from "assets/data/CarImages/Tesla Model 3.jpg";
import TeslaModelSImg from "assets/data/CarImages/Tesla Model S.jpg";
import TeslaModelXImg from "assets/data/CarImages/Tesla Model X.png";
import TeslaModelYImg from "assets/data/CarImages/Tesla Model Y.jpg";
import AudiRSEtronGTImg from "assets/data/CarImages/Audi_RS_e-tron_GT.png";

type Car = {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
  img?: string;

  type: string;
  engin: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
};

export const Result: Car[] = [
  {
    brand: "?????????",
    model: "e-tron S",

    type: "????????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 29,
    e: 16,
    f: 16,
    g: 27,

    distance: 264,
    battery: 95,
    MPG: 2.7,
    cost: 135600000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-s.html",
    img: AudiEtronSImg,
  },
  {
    brand: "?????????",
    model: "e-tron S Sportback",

    type: "????????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 29,
    e: 16,
    f: 16,
    g: 27,
    distance: 269,
    battery: 95,
    MPG: 2.7,
    cost: 141482000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-s-sportback.html",
    img: AudiEtronSSportbackImg,
  },
  {
    brand: "?????????",
    model: "e-tron",

    type: "????????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 29,
    e: 16,
    f: 16,
    g: 26,

    distance: 328,
    battery: 95,
    MPG: 2.9,
    cost: 97220000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-etron_2021.html",
    img: AudiEtronImg,
  },
  {
    brand: "?????????",
    model: "e-tron Sportback",
    type: "????????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 29,
    e: 16,
    f: 16,
    g: 26,
    distance: 304,
    battery: 95,
    MPG: 3.1,
    cost: 101140000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-sportback_2021.html",
    img: AudiEtronSportbackImg,
  },
  {
    brand: "BMW",
    model: "iX M60",
    type: "?????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 30,
    e: 16,
    f: 16,
    g: 26,
    distance: 421,
    battery: 106.3,
    MPG: 3.4,
    cost: 155100000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html",
    img: BMWiXM60Img,
  },
  {
    brand: "?????????",
    model: "e-tron GT",
    type: "????????? ??????",
    engin: 4,
    a: 49,
    b: 19,
    c: 14,
    d: 28,
    e: 17,
    f: 16,
    g: 23,
    distance: 487,
    battery: 93.4,
    MPG: 3.4,
    cost: 206300000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron-gt/etrongt_2022.html",
    img: AudiEtronGTImg,
  },
  {
    brand: "BMW",
    model: "iX",
    type: "?????? SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 16,
    d: 30,
    e: 16,
    f: 16,
    g: 24,
    distance: 447,
    battery: 111.5,
    MPG: 3.6,
    cost: 148600000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/bmw-ix/2021/bmw-ix.html",
    img: BMWiXImg,
  },
  {
    brand: "BMW",
    model: "i7",
    type: "?????? ??????",
    engin: 4,
    a: 53,
    b: 19,
    c: 15,
    d: 32,
    e: 17,
    f: 17,
    g: 27,
    distance: 438,
    battery: 105.7,
    MPG: 3.7,
    cost: 215700000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/i7/2022/bmw-i7-sedan-highlights.html",
    img: BMWi7Img,
  },
  {
    brand: "?????????",
    model: "RS e-tron GT",
    type: "????????? ??????",
    engin: 4,
    a: 49,
    b: 19,
    c: 14,
    d: 29,
    e: 16,
    f: 16,
    g: 23,
    distance: 487,
    battery: 93.4,
    MPG: 3.7,
    cost: 143320000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron-gt/rsetrongt_2022.html",
    img: AudiRSEtronGTImg,
  },
  {
    brand: "kia",
    model: "EV6 GT",
    type: "????????? SUV",
    engin: 4,
    a: 46,
    b: 18,
    c: 15,
    d: 29,
    e: 16,
    f: 16,
    g: 21,
    distance: 342,
    battery: 77.4,
    MPG: 3.9,
    cost: 76680000,
    homepage: "https://www.kia.com/kr/vehicles/ev6-gt/features",
    img: KiaEV6GTImg,
  },
  {
    // ??????, ??????, ??????, ??????, ?????????, ?????????, ????????????
    brand: "??????",
    model: "EQS Sedan",
    type: "?????? ??????",
    engin: 4,
    a: 52,
    b: 19,
    c: 15,
    d: 32,
    e: 16,
    f: 16,
    g: 25,
    distance: 440,
    battery: 88.8,
    MPG: 4,
    cost: 188600000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore.html",
    img: BenzEQSSedanImg,
  },
  {
    brand: "??????",
    model: "EQA SUV",
    type: "????????? SUV",
    engin: 2,
    a: 44,
    b: 18,
    c: 16,
    d: 27,
    e: 16,
    f: 16,
    g: 19,
    distance: 301,
    battery: 66.5,
    MPG: 4,
    cost: 59900000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqa/explore.html",
    img: BenzEQASUVImg,
  },
  {
    brand: "BMW",
    model: "i4 M50",
    type: "?????? ??????",
    engin: 2,
    a: 47,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 21,
    distance: 378,
    battery: 83.9,
    MPG: 4.1,
    cost: 84900000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/m-series/i4-m50/2021/bmw-i4-m50-highlights.html",
    img: BMWi4M50Img,
  },
  {
    brand: "BMW",
    model: "iX3",
    type: "?????? ??????",
    engin: 2,
    a: 47,
    b: 18,
    c: 16,
    d: 28,
    e: 16,
    f: 16,
    g: 22,
    distance: 344,
    battery: 80,
    MPG: 4.1,
    cost: 75900000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/x-series/iX3/2021/bmw-ix3-highlights.html",
    img: BMWiX3Img,
  },
  {
    brand: "?????????",
    model: "Model S",
    type: "????????? ??????",
    engin: 4,
    a: 50,
    b: 19,
    c: 14,
    d: 29,
    e: 16,
    f: 17,
    g: 22,
    distance: 483,
    battery: 100,
    MPG: 4.1,
    cost: 129990000,
    homepage: "https://www.tesla.com/ko_kr/models",
    img: TeslaModelSImg,
  },
  {
    brand: "?????????",
    model: "Model X",
    type: "????????? SUV",
    engin: 4,
    a: 50,
    b: 20,
    c: 16,
    d: 29,
    e: 16,
    f: 16,
    g: 25,
    distance: 478,
    battery: 100,
    MPG: 4.1,
    cost: 139990000,
    homepage: "https://www.tesla.com/ko_kr/modelx",
    img: TeslaModelXImg,
  },
  {
    brand: "?????????",
    model: "Q4 Sportback e-tron",
    type: "????????? SUV",
    engin: 2,
    a: 45,
    b: 18,
    c: 16,
    d: 27,
    e: 15,
    f: 15,
    g: 21,
    distance: 357,
    battery: 82,
    MPG: 4.1,
    cost: 63700000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/q4_e-tron/q4etronsb_2022.html",
    img: AudiQ4SportbackEtronImg,
  },
  {
    brand: "??????",
    model: "EQB SUV",
    type: "????????? SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 16,
    d: 28,
    e: 15,
    f: 15,
    g: 21,
    distance: 313,
    battery: 66.5,
    MPG: 4.1,
    cost: 76000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqb/suv-x243/explore.html",
    img: BenzEQBSUVImg,
  },
  {
    brand: "????????????",
    model: "G80",
    type: "????????? SUV",
    engin: 2,
    a: 49,
    b: 19,
    c: 14,
    d: 30,
    e: 16,
    f: 16,
    g: 17,
    distance: 427,
    battery: 82.7,
    MPG: 4.3,
    cost: 82800000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html",
    img: GenesisG80Img,
  },
  {
    brand: "?????????",
    model: "Q4 e-tron",
    type: "????????? SUV",
    engin: 2,
    a: 45,
    b: 18,
    c: 16,
    d: 27,
    e: 15,
    f: 15,
    g: 21,
    distance: 368,
    battery: 82,
    MPG: 4.3,
    cost: 59700000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/q4_e-tron/q4etron_2022.html",
    img: AudiQ4EtronImg,
  },
  {
    brand: "??????",
    model: "EQE Sedan",
    type: "????????? ??????",
    engin: 2,
    a: 49,
    b: 19,
    c: 15,
    d: 31,
    e: 16,
    f: 16,
    g: 23,
    distance: 471,
    battery: 88.8,
    MPG: 4.3,
    cost: 103000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqe/saloon-v295/explore.html",
    img: BenzEQESedanImg,
  },
  {
    brand: "BMW",
    model: "i4",
    type: "????????? ??????",
    engin: 2,
    a: 47,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 21,
    distance: 429,
    battery: 83.9,
    MPG: 4.6,
    cost: 66400000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/i4/2021/bmw-i4-highlights.html",
    img: BMWi4Img,
  },
  {
    brand: "????????????",
    model: "GV70",
    type: "?????? SUV",
    engin: 2,
    a: 47,
    b: 19,
    c: 16,
    d: 28,
    e: 16,
    f: 16,
    g: 18,
    distance: 400,
    battery: 77.4,
    MPG: 4.6,
    cost: 73320000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/highlights.html",
    img: GenesisGV70Img,
  },
  {
    brand: "?????????",
    model: "Model Y",
    type: "?????? SUV",
    engin: 4,
    a: 47,
    b: 19,
    c: 16,
    d: 28,
    e: 16,
    f: 16,
    g: 20,
    distance: 448,
    battery: 75,
    MPG: 4.8,
    cost: 96640000,
    homepage: "https://www.tesla.com/ko_kr/modely",
    img: TeslaModelYImg,
  },
  {
    brand: "?????????",
    model: "Model 3",
    type: "?????? ??????",
    engin: 2,
    a: 46,
    b: 18,
    c: 14,
    d: 28,
    e: 15,
    f: 15,
    g: 16,
    distance: 403,
    battery: 75,
    MPG: 5.1,
    cost: 70340000,
    homepage: "https://www.tesla.com/ko_kr/model3",
    img: TeslaModel3Img,
  },
  {
    brand: "????????????",
    model: "GV60",
    type: "????????? SUV",
    engin: 2,
    a: 45,
    b: 18,
    c: 15,
    d: 29,
    e: 16,
    f: 16,
    g: 19,
    distance: 427,
    battery: 82.7,
    MPG: 4.3,
    cost: 82800000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html",
    img: GenesisGV60Img,
  },
  {
    brand: "??????",
    model: "???????????? 5",
    type: "?????? SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 16,
    d: 30,
    e: 16,
    f: 16,
    g: 19,
    distance: 458,
    battery: 77.4,
    MPG: 5.2,
    cost: 50050000,
    homepage: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq5/intro",
    img: HyundaiIoniq5Img,
  },
  {
    brand: "??????",
    model: "Niro EV",
    type: "????????? SUV",
    engin: 2,
    a: 44,
    b: 18,
    c: 15,
    d: 27,
    e: 15,
    f: 15,
    g: 17,
    distance: 401,
    battery: 64.8,
    MPG: 5.3,
    cost: 49420000,
    homepage: "https://www.kia.com/kr/vehicles/niro-plus/features",
    img: KiaNiroEVImg,
  },
  {
    brand: "??????",
    model: "Niro Plus",
    type: "????????? ??????",
    engin: 2,
    a: 43,
    b: 18,
    c: 16,
    d: 27,
    e: 15,
    f: 15,
    g: 17,
    distance: 392,
    battery: 64,
    MPG: 5.3,
    cost: 44200000,
    homepage: "https://www.kia.com/kr/vehicles/niro-plus/features",
    img: KiaNiroPlusImg,
  },
  {
    brand: "??????",
    model: "EV6",
    type: "?????? SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 15,
    d: 29,
    e: 15,
    f: 15,
    g: 18,
    distance: 475,
    battery: 58,
    MPG: 5.6,
    cost: 51870000,
    homepage: "https://www.kia.com/kr/vehicles/ev6/features",
    img: KiaEV6Img,
  },
  {
    brand: "??????",
    model: "???????????? 6",
    type: "?????? ??????",
    engin: 2,
    a: 48,
    b: 18,
    c: 14,
    d: 29,
    e: 16,
    f: 16,
    g: 18,
    distance: 524,
    battery: 77.4,
    MPG: 6.2,
    cost: 52000000,
    homepage: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq6/intro",
    img: HyundaiIoniq6Img,
  },
  {
    brand: "?????????",
    model: "BOLT EV",
    type: "?????? SUV",
    engin: 2,
    a: 41,
    b: 17,
    c: 15,
    d: 26,
    e: 15,
    f: 15,
    g: 16,
    distance: 414,
    battery: 66,
    MPG: 6.6,
    cost: 44300000,
    homepage: "https://www.chevrolet.co.kr/electric/bolt-ev",
    img: ChevroletBoltEvImg,
  },
];

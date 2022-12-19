import AudiEtronGTImg from "assets/data/CarImages/Audi e-tron GT.png";
import AudiEtronSImg from "assets/data/CarImages/Audi e-tron S.png";
import AudiEtronImg from "assets/data/CarImages/Audi e-tron.jpg";
import AudiQ4SportbackEtronImg from "assets/data/CarImages/Audi Q4 Sportback e-tron.jpg";
import BenzEQASUVImg from "assets/data/CarImages/Benz EQA SUV.png";
import BenzEQBSUVImg from "assets/data/CarImages/Benz EQB SUV.jpg";
import BenzEQESedanImg from "assets/data/CarImages/Benz EQE Sedan.jpg";
import BMWi4M50Img from "assets/data/CarImages/BMW i4 M50.jpg";
import BMWi4Img from "assets/data/CarImages/BMW i4.jpg";
import BMWiXImg from "assets/data/CarImages/BMW iX.jpg";
import ChevroletBoltEvImg from "assets/data/CarImages/Chevrolet BOLT EV.png";
import GenesisGV60Img from "assets/data/CarImages/Genesis GV60.png";
import HyundaiIoniq6Img from "assets/data/CarImages/Hyundai Ioniq 6.png";
import KiaNiroPlusImg from "assets/data/CarImages/Kia Niro Plus.png";
import TeslaModel3Img from "assets/data/CarImages/Tesla Model 3.jpg";
import TeslaModelSImg from "assets/data/CarImages/Tesla Model S.jpg";

type ResultList = {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
  img?: string;
};

type ResultCarProps = {
  [key: string]: ResultList;
};

export const MbtiRecommendCar: ResultCarProps = {
  CFBH: {
    brand: "제네시스",
    model: "GV60",
    distance: 427,
    battery: 82.7,
    MPG: 4.3,
    cost: 82800000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html",
    img: GenesisGV60Img,
  },
  CFBN: {
    brand: "벤츠",
    model: "EQA SUV",
    distance: 301,
    battery: 66.5,
    MPG: 4,
    cost: 59900000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqa/explore.html",
    img: BenzEQASUVImg,
  },
  CFAH: {
    brand: "아우디",
    model: "Q4 Sportback e-tron",
    distance: 357,
    battery: 82,
    MPG: 4.1,
    cost: 63700000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/q4_e-tron/q4etronsb_2022.html",
    img: AudiQ4SportbackEtronImg,
  },
  CFAN: {
    brand: "BMW",
    model: "i4 M50",
    distance: 378,
    battery: 83.9,
    MPG: 4.1,
    cost: 84900000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/m-series/i4-m50/2021/bmw-i4-m50-highlights.html",
    img: BMWi4M50Img,
  },
  CWBH: {
    brand: "BMW",
    model: "i4",
    distance: 429,
    battery: 83.9,
    MPG: 4.6,
    cost: 66400000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/i4/2021/bmw-i4-highlights.html",
    img: BMWi4Img,
  },
  CWBN: {
    brand: "쉐보레",
    model: "BOLT EV",
    distance: 414,
    battery: 66,
    MPG: 6.6,
    cost: 44300000,
    homepage: "https://www.chevrolet.co.kr/electric/bolt-ev",
    img: ChevroletBoltEvImg,
  },
  CWAH: {
    brand: "현대",
    model: "아이오닉 6",
    distance: 524,
    battery: 77.4,
    MPG: 6.2,
    cost: 52000000,
    homepage: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq6/intro",
    img: HyundaiIoniq6Img,
  },
  CWAN: {
    brand: "기아",
    model: "Niro Plus",
    distance: 392,
    battery: 64,
    MPG: 5.3,
    cost: 44200000,
    homepage: "https://www.kia.com/kr/vehicles/niro-plus/features",
    img: KiaNiroPlusImg,
  },
  EFBH: {
    brand: "BMW",
    model: "iX",
    distance: 447,
    battery: 111.5,
    MPG: 3.6,
    cost: 148600000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/bmw-ix/2021/bmw-ix.html",
    img: BMWiXImg,
  },
  EFBN: {
    brand: "아우디",
    model: "e-tron",
    distance: 328,
    battery: 95,
    MPG: 2.9,
    cost: 97220000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-etron_2021.html",
    img: AudiEtronImg,
  },
  EFAH: {
    brand: "벤츠",
    model: "EQE Sedan",
    distance: 471,
    battery: 88.8,
    MPG: 4.3,
    cost: 103000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqe/saloon-v295/explore.html",
    img: BenzEQESedanImg,
  },
  EFAN: {
    brand: "아우디",
    model: "e-tron S",
    distance: 264,
    battery: 95,
    MPG: 2.7,
    cost: 135600000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-s.html",
    img: AudiEtronSImg,
  },
  EWBH: {
    brand: "테슬라",
    model: "Model S",
    distance: 483,
    battery: 100,
    MPG: 4.1,
    cost: 129990000,
    homepage: "https://www.tesla.com/ko_kr/models",
    img: TeslaModelSImg,
  },
  EWBN: {
    brand: "테슬라",
    model: "Model 3",
    distance: 403,
    battery: 75,
    MPG: 5.1,
    cost: 70340000,
    homepage: "https://www.tesla.com/ko_kr/model3",
    img: TeslaModel3Img,
  },
  EWAH: {
    brand: "아우디",
    model: "e-tron GT",
    distance: 487,
    battery: 93.4,
    MPG: 3.7,
    cost: 143320000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron-gt/etrongt_2022.html",
    img: AudiEtronGTImg,
  },
  EWAN: {
    brand: "벤츠",
    model: "EQB SUV",
    distance: 313,
    battery: 66.5,
    MPG: 4.1,
    cost: 76000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqb/suv-x243/explore.html",
    img: BenzEQBSUVImg,
  },
};

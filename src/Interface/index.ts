export interface IPraytime {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    Firstthird: string;
    Lastthird: string;
  };
}

export interface IHadish {
  hadiths: ISinglehidish[];
}
export interface ISinglehidish {
  number: number;
  arab: string;
}

export interface ISuhrah {
  surahs: {
    references: ISinglesurah[];
  };
}
export interface ISinglesurah {
  name: string;
  englishName: string;
}

export interface IAyat {
  name: string;
  number: number;
  numberOfAyahs: number;
  ayahs: ISingleayat[];
}
export interface ISingleayat {
  text: string;
  numberInSurah: number;
}

export interface ITafsser {
  result: ISingletafsser[];
}
export interface ISingletafsser {
  id: string;
  arabic_text: string;
  translation: string;
  aya: string;
}

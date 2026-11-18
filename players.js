// players.js — Oyuncu verisi. Kaynak: Wikipedia kariyer tabloları (tüm müsabakalar).
// Satır: [sezon, takım, ligMaç, ligGol, toplamMaç, toplamGol]
// Yeni oyuncu eklemek için bu dizinin sonuna aynı biçimde bir nesne ekle.
const PLAYERS = [
  {name:'Cristiano Ronaldo', aliases:['Ronaldo','CR7','Cristiano'], source:'Wikipedia, 18 Kasım 2026', rows:[
    ['2002–03','Sporting CP B',2,0,2,0],['2002–03','Sporting CP',25,3,31,5],
    ['2003–04','Manchester United',29,4,40,6],['2004–05','Manchester United',33,5,50,9],['2005–06','Manchester United',33,9,47,12],
    ['2006–07','Manchester United',34,17,53,23],['2007–08','Manchester United',34,31,49,42],['2008–09','Manchester United',33,18,53,26],
    ['2009–10','Real Madrid',29,26,35,33],['2010–11','Real Madrid',34,40,54,53],['2011–12','Real Madrid',38,46,55,60],
    ['2012–13','Real Madrid',34,34,55,55],['2013–14','Real Madrid',30,31,47,51],['2014–15','Real Madrid',35,48,54,61],
    ['2015–16','Real Madrid',36,35,48,51],['2016–17','Real Madrid',29,25,46,42],['2017–18','Real Madrid',27,26,44,44],
    ['2018–19','Juventus',31,21,43,28],['2019–20','Juventus',33,31,46,37],['2020–21','Juventus',33,29,44,36],['2021–22','Juventus',1,0,1,0],
    ['2021–22','Manchester United',30,18,38,24],['2022–23','Manchester United',10,1,16,3],
    ['2022–23','Al-Nassr',16,14,19,14],['2023–24','Al-Nassr',31,35,51,50],['2024–25','Al-Nassr',30,25,41,35],
    ['2025–26','Al-Nassr',30,28,37,30],['2026–27','Al-Nassr',10,8,12,9]]}
  ,{name:'Lionel Messi', aliases:['Messi','Leo Messi','Lionel'], source:'Wikipedia, Mart 2026 kopyası (2026 sezonu eklenmedi)', rows:[
    ['2003–04','Barcelona C',10,5,10,5],['2003–04','Barcelona B',5,0,5,0],['2004–05','Barcelona B',17,6,17,6],
    ['2004–05','Barcelona',7,1,9,1],['2005–06','Barcelona',17,6,25,8],['2006–07','Barcelona',26,14,36,17],['2007–08','Barcelona',28,10,40,16],
    ['2008–09','Barcelona',31,23,51,38],['2009–10','Barcelona',35,34,53,47],['2010–11','Barcelona',33,31,55,53],['2011–12','Barcelona',37,50,60,73],
    ['2012–13','Barcelona',32,46,50,60],['2013–14','Barcelona',31,28,46,41],['2014–15','Barcelona',38,43,57,58],['2015–16','Barcelona',33,26,49,41],
    ['2016–17','Barcelona',34,37,52,54],['2017–18','Barcelona',36,34,54,45],['2018–19','Barcelona',34,36,50,51],['2019–20','Barcelona',33,25,44,31],
    ['2020–21','Barcelona',35,30,47,38],['2021–22','Paris Saint-Germain',26,6,34,11],['2022–23','Paris Saint-Germain',32,16,41,21],
    ['2023','Inter Miami',6,1,14,11],['2024','Inter Miami',19,20,25,23],['2025','Inter Miami',28,29,49,43]]}
  ,{name:'Neymar', aliases:['Neymar Jr','Neymar Junior'], source:'Wikipedia, 18 Ekim 2026 (yalnızca lig; sezon dökümü yok)', rows:[
    ['2009–13','Santos',179,107,null,null],['2013–17','Barcelona',123,68,null,null],['2017–23','Paris Saint-Germain',112,82,null,null],
    ['2023–25','Al-Hilal',3,0,null,null],['2025–','Santos',43,19,null,null]]}
];

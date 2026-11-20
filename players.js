// players.js — Oyuncu kariyer verileri
// Satır biçimi: [sezon, takım]

const PLAYERS = [
  {
    name: 'Cristiano Ronaldo',
    aliases: ['Ronaldo', 'CR7', 'Cristiano'],
    rows: [
      ['2002–03', 'Sporting CP B'], ['2002–03', 'Sporting CP'],
      ['2003–04', 'Manchester United'], ['2004–05', 'Manchester United'],
      ['2005–06', 'Manchester United'], ['2006–07', 'Manchester United'],
      ['2007–08', 'Manchester United'], ['2008–09', 'Manchester United'],
      ['2009–10', 'Real Madrid'], ['2010–11', 'Real Madrid'],
      ['2011–12', 'Real Madrid'], ['2012–13', 'Real Madrid'],
      ['2013–14', 'Real Madrid'], ['2014–15', 'Real Madrid'],
      ['2015–16', 'Real Madrid'], ['2016–17', 'Real Madrid'],
      ['2017–18', 'Real Madrid'], ['2018–19', 'Juventus'],
      ['2019–20', 'Juventus'], ['2020–21', 'Juventus'],
      ['2021–22', 'Juventus'], ['2021–22', 'Manchester United'],
      ['2022–23', 'Manchester United'], ['2022–23', 'Al-Nassr'],
      ['2023–24', 'Al-Nassr'], ['2024–25', 'Al-Nassr'],
      ['2025–26', 'Al-Nassr'], ['2026–27', 'Al-Nassr']
    ]
  },
  {
    name: 'Lionel Messi',
    aliases: ['Messi', 'Leo Messi', 'Lionel'],
    rows: [
      ['2003–04', 'Barcelona C'], ['2003–04', 'Barcelona B'],
      ['2004–05', 'Barcelona B'], ['2004–05', 'Barcelona'],
      ['2005–06', 'Barcelona'], ['2006–07', 'Barcelona'],
      ['2007–08', 'Barcelona'], ['2008–09', 'Barcelona'],
      ['2009–10', 'Barcelona'], ['2010–11', 'Barcelona'],
      ['2011–12', 'Barcelona'], ['2012–13', 'Barcelona'],
      ['2013–14', 'Barcelona'], ['2014–15', 'Barcelona'],
      ['2015–16', 'Barcelona'], ['2016–17', 'Barcelona'],
      ['2017–18', 'Barcelona'], ['2018–19', 'Barcelona'],
      ['2019–20', 'Barcelona'], ['2020–21', 'Barcelona'],
      ['2021–22', 'Paris Saint-Germain'], ['2022–23', 'Paris Saint-Germain'],
      ['2023', 'Inter Miami'], ['2024', 'Inter Miami'],
      ['2025', 'Inter Miami'], ['2026', 'Inter Miami']
    ]
  },
  {
    name: 'Neymar',
    aliases: ['Neymar Jr', 'Neymar Junior'],
    rows: [
      ['2009', 'Santos'], ['2010', 'Santos'], ['2011', 'Santos'],
      ['2012', 'Santos'], ['2013', 'Santos'], ['2013–14', 'Barcelona'],
      ['2014–15', 'Barcelona'], ['2015–16', 'Barcelona'],
      ['2016–17', 'Barcelona'], ['2017–18', 'Paris Saint-Germain'],
      ['2018–19', 'Paris Saint-Germain'], ['2019–20', 'Paris Saint-Germain'],
      ['2020–21', 'Paris Saint-Germain'], ['2021–22', 'Paris Saint-Germain'],
      ['2022–23', 'Paris Saint-Germain'], ['2023–24', 'Al-Hilal'],
      ['2024–25', 'Al-Hilal'], ['2025', 'Santos'], ['2026', 'Santos']
    ]
  },
  {
    name: 'Kylian Mbappé',
    aliases: ['Mbappe', 'Mbappé'],
    rows: [
      ['2015–16', 'Monaco'], ['2016–17', 'Monaco'],
      ['2017–18', 'Monaco'], ['2017–18', 'Paris Saint-Germain'],
      ['2018–19', 'Paris Saint-Germain'], ['2019–20', 'Paris Saint-Germain'],
      ['2020–21', 'Paris Saint-Germain'], ['2021–22', 'Paris Saint-Germain'],
      ['2022–23', 'Paris Saint-Germain'], ['2023–24', 'Paris Saint-Germain'],
      ['2024–25', 'Real Madrid'], ['2025–26', 'Real Madrid'],
      ['2026–27', 'Real Madrid']
    ]
  },
  {
    name: 'Zlatan Ibrahimović',
    aliases: ['Ibrahimovic', 'Ibra', 'Zlatan'],
    rows: [
      ['1999–00', 'Malmö FF'], ['2000–01', 'Malmö FF'],
      ['2001–02', 'Ajax'], ['2002–03', 'Ajax'],
      ['2003–04', 'Ajax'], ['2004–05', 'Juventus'],
      ['2005–06', 'Juventus'], ['2006–07', 'Inter Milan'],
      ['2007–08', 'Inter Milan'], ['2008–09', 'Inter Milan'],
      ['2009–10', 'Barcelona'], ['2010–11', 'AC Milan'],
      ['2011–12', 'AC Milan'], ['2012–13', 'Paris Saint-Germain'],
      ['2013–14', 'Paris Saint-Germain'], ['2014–15', 'Paris Saint-Germain'],
      ['2015–16', 'Paris Saint-Germain'], ['2016–17', 'Manchester United'],
      ['2017–18', 'Manchester United'], ['2018', 'LA Galaxy'],
      ['2019', 'LA Galaxy'], ['2020–21', 'AC Milan'],
      ['2021–22', 'AC Milan'], ['2022–23', 'AC Milan']
    ]
  },
  {
    name: 'Ronaldinho',
    aliases: ['Ronaldinho Gaúcho', 'Dinho'],
    rows: [
      ['1998', 'Grêmio'], ['1999', 'Grêmio'],
      ['2000', 'Grêmio'], ['2001', 'Paris Saint-Germain'],
      ['2002–03', 'Paris Saint-Germain'], ['2003–04', 'Barcelona'],
      ['2004–05', 'Barcelona'], ['2005–06', 'Barcelona'],
      ['2006–07', 'Barcelona'], ['2007–08', 'Barcelona'],
      ['2008–09', 'AC Milan'], ['2009–10', 'AC Milan'],
      ['2010–11', 'AC Milan'], ['2011', 'Flamengo'],
      ['2012', 'Flamengo'], ['2012', 'Atlético Mineiro'],
      ['2013', 'Atlético Mineiro'], ['2014', 'Querétaro'],
      ['2015', 'Fluminense']
    ]
  },
  {
    name: 'Thierry Henry',
    aliases: ['Henry', 'Titi'],
    rows: [
      ['1994–95', 'Monaco'], ['1995–96', 'Monaco'],
      ['1996–97', 'Monaco'], ['1997–98', 'Monaco'],
      ['1998–99', 'Juventus'], ['1999–00', 'Arsenal'],
      ['2000–01', 'Arsenal'], ['2001–02', 'Arsenal'],
      ['2002–03', 'Arsenal'], ['2003–04', 'Arsenal'],
      ['2004–05', 'Arsenal'], ['2005–06', 'Arsenal'],
      ['2006–07', 'Arsenal'], ['2007–08', 'Barcelona'],
      ['2008–09', 'Barcelona'], ['2009–10', 'Barcelona'],
      ['2010', 'New York Red Bulls'], ['2011', 'New York Red Bulls'],
      ['2012', 'New York Red Bulls'], ['2012', 'Arsenal'],
      ['2013', 'New York Red Bulls'], ['2014', 'New York Red Bulls']
    ]
  },
  {
    name: 'Luis Suárez',
    aliases: ['Suarez', 'El Pistolero'],
    rows: [
      ['2005–06', 'Nacional'], ['2006–07', 'Groningen'],
      ['2007–08', 'Ajax'], ['2008–09', 'Ajax'],
      ['2009–10', 'Ajax'], ['2010–11', 'Ajax'],
      ['2010–11', 'Liverpool'], ['2011–12', 'Liverpool'],
      ['2012–13', 'Liverpool'], ['2013–14', 'Liverpool'],
      ['2014–15', 'Barcelona'], ['2015–16', 'Barcelona'],
      ['2016–17', 'Barcelona'], ['2017–18', 'Barcelona'],
      ['2018–19', 'Barcelona'], ['2019–20', 'Barcelona'],
      ['2020–21', 'Atlético Madrid'], ['2021–22', 'Atlético Madrid'],
      ['2022', 'Nacional'], ['2023', 'Grêmio'],
      ['2024', 'Inter Miami'], ['2025', 'Inter Miami'],
      ['2026', 'Inter Miami']
    ]
  },
  {
    name: 'Karim Benzema',
    aliases: ['Benzema', 'KB9'],
    rows: [
      ['2004–05', 'Lyon'], ['2005–06', 'Lyon'],
      ['2006–07', 'Lyon'], ['2007–08', 'Lyon'],
      ['2008–09', 'Lyon'], ['2009–10', 'Real Madrid'],
      ['2010–11', 'Real Madrid'], ['2011–12', 'Real Madrid'],
      ['2012–13', 'Real Madrid'], ['2013–14', 'Real Madrid'],
      ['2014–15', 'Real Madrid'], ['2015–16', 'Real Madrid'],
      ['2016–17', 'Real Madrid'], ['2017–18', 'Real Madrid'],
      ['2018–19', 'Real Madrid'], ['2019–20', 'Real Madrid'],
      ['2020–21', 'Real Madrid'], ['2021–22', 'Real Madrid'],
      ['2022–23', 'Real Madrid'], ['2023–24', 'Al-Ittihad'],
      ['2024–25', 'Al-Ittihad'], ['2025–26', 'Al-Ittihad'],
      ['2026–27', 'Al-Ittihad']
    ]
  },
  {
    name: 'Luka Modrić',
    aliases: ['Modric', 'Luka'],
    rows: [
      ['2003–04', 'Dinamo Zagreb'], ['2004–05', 'Dinamo Zagreb'],
      ['2005–06', 'Zrinjski Mostar'], ['2005–06', 'Dinamo Zagreb'],
      ['2006–07', 'Dinamo Zagreb'], ['2007–08', 'Dinamo Zagreb'],
      ['2008–09', 'Tottenham Hotspur'], ['2009–10', 'Tottenham Hotspur'],
      ['2010–11', 'Tottenham Hotspur'], ['2011–12', 'Tottenham Hotspur'],
      ['2012–13', 'Real Madrid'], ['2013–14', 'Real Madrid'],
      ['2014–15', 'Real Madrid'], ['2015–16', 'Real Madrid'],
      ['2016–17', 'Real Madrid'], ['2017–18', 'Real Madrid'],
      ['2018–19', 'Real Madrid'], ['2019–20', 'Real Madrid'],
      ['2020–21', 'Real Madrid'], ['2021–22', 'Real Madrid'],
      ['2022–23', 'Real Madrid'], ['2023–24', 'Real Madrid'],
      ['2024–25', 'Real Madrid'], ['2025–26', 'AC Milan'],
      ['2026–27', 'AC Milan']
    ]
  },
  {
    name: 'Toni Kroos',
    aliases: ['Kroos', 'Toni'],
    rows: [
      ['2007–08', 'Bayern Munich'], ['2008–09', 'Bayern Munich'],
      ['2009–10', 'Bayer Leverkusen'], ['2010–11', 'Bayer Leverkusen'],
      ['2011–12', 'Bayern Munich'], ['2012–13', 'Bayern Munich'],
      ['2013–14', 'Bayern Munich'], ['2014–15', 'Real Madrid'],
      ['2015–16', 'Real Madrid'], ['2016–17', 'Real Madrid'],
      ['2017–18', 'Real Madrid'], ['2018–19', 'Real Madrid'],
      ['2019–20', 'Real Madrid'], ['2020–21', 'Real Madrid'],
      ['2021–22', 'Real Madrid'], ['2022–23', 'Real Madrid'],
      ['2023–24', 'Real Madrid']
    ]
  },
  {
    name: 'Ángel Di María',
    aliases: ['Di Maria', 'Angel Di Maria'],
    rows: [
      ['2005–06', 'Rosario Central'], ['2006–07', 'Rosario Central'],
      ['2007–08', 'Benfica'], ['2008–09', 'Benfica'],
      ['2009–10', 'Benfica'], ['2010–11', 'Real Madrid'],
      ['2011–12', 'Real Madrid'], ['2012–13', 'Real Madrid'],
      ['2013–14', 'Real Madrid'], ['2014–15', 'Manchester United'],
      ['2015–16', 'Paris Saint-Germain'], ['2016–17', 'Paris Saint-Germain'],
      ['2017–18', 'Paris Saint-Germain'], ['2018–19', 'Paris Saint-Germain'],
      ['2019–20', 'Paris Saint-Germain'], ['2020–21', 'Paris Saint-Germain'],
      ['2021–22', 'Paris Saint-Germain'], ['2022–23', 'Juventus'],
      ['2023–24', 'Benfica'], ['2024–25', 'Benfica'],
      ['2025–26', 'Rosario Central'], ['2026–27', 'Rosario Central']
    ]
  },
  {
    name: 'Gareth Bale',
    aliases: ['Bale', 'Gareth'],
    rows: [
      ['2005–06', 'Southampton'], ['2006–07', 'Southampton'],
      ['2007–08', 'Tottenham Hotspur'], ['2008–09', 'Tottenham Hotspur'],
      ['2009–10', 'Tottenham Hotspur'], ['2010–11', 'Tottenham Hotspur'],
      ['2011–12', 'Tottenham Hotspur'], ['2012–13', 'Tottenham Hotspur'],
      ['2013–14', 'Real Madrid'], ['2014–15', 'Real Madrid'],
      ['2015–16', 'Real Madrid'], ['2016–17', 'Real Madrid'],
      ['2017–18', 'Real Madrid'], ['2018–19', 'Real Madrid'],
      ['2019–20', 'Real Madrid'], ['2020–21', 'Tottenham Hotspur'],
      ['2021–22', 'Real Madrid'], ['2022', 'Los Angeles FC']
    ]
  },
  {
    name: 'Sergio Ramos',
    aliases: ['Ramos', 'Sergio'],
    rows: [
      ['2003–04', 'Sevilla'], ['2004–05', 'Sevilla'],
      ['2005–06', 'Real Madrid'], ['2006–07', 'Real Madrid'],
      ['2007–08', 'Real Madrid'], ['2008–09', 'Real Madrid'],
      ['2009–10', 'Real Madrid'], ['2010–11', 'Real Madrid'],
      ['2011–12', 'Real Madrid'], ['2012–13', 'Real Madrid'],
      ['2013–14', 'Real Madrid'], ['2014–15', 'Real Madrid'],
      ['2015–16', 'Real Madrid'], ['2016–17', 'Real Madrid'],
      ['2017–18', 'Real Madrid'], ['2018–19', 'Real Madrid'],
      ['2019–20', 'Real Madrid'], ['2020–21', 'Real Madrid'],
      ['2021–22', 'Paris Saint-Germain'], ['2022–23', 'Paris Saint-Germain'],
      ['2023–24', 'Sevilla'], ['2024–25', 'Monterrey'],
      ['2025–26', 'Monterrey']
    ]
  },
  {
    name: 'Mesut Özil',
    aliases: ['Ozil', 'Mesut'],
    rows: [
      ['2006–07', 'Schalke 04'], ['2007–08', 'Werder Bremen'],
      ['2008–09', 'Werder Bremen'], ['2009–10', 'Werder Bremen'],
      ['2010–11', 'Real Madrid'], ['2011–12', 'Real Madrid'],
      ['2012–13', 'Real Madrid'], ['2013–14', 'Arsenal'],
      ['2014–15', 'Arsenal'], ['2015–16', 'Arsenal'],
      ['2016–17', 'Arsenal'], ['2017–18', 'Arsenal'],
      ['2018–19', 'Arsenal'], ['2019–20', 'Arsenal'],
      ['2020–21', 'Fenerbahçe'], ['2021–22', 'Fenerbahçe'],
      ['2022–23', 'İstanbul Başakşehir']
    ]
  },
  {
    name: 'Eden Hazard',
    aliases: ['Hazard', 'Eden'],
    rows: [
      ['2007–08', 'Lille'], ['2008–09', 'Lille'],
      ['2009–10', 'Lille'], ['2010–11', 'Lille'],
      ['2011–12', 'Lille'], ['2012–13', 'Chelsea'],
      ['2013–14', 'Chelsea'], ['2014–15', 'Chelsea'],
      ['2015–16', 'Chelsea'], ['2016–17', 'Chelsea'],
      ['2017–18', 'Chelsea'], ['2018–19', 'Chelsea'],
      ['2019–20', 'Real Madrid'], ['2020–21', 'Real Madrid'],
      ['2021–22', 'Real Madrid'], ['2022–23', 'Real Madrid']
    ]
  },
  {
    name: 'Arjen Robben',
    aliases: ['Robben', 'Arjen'],
    rows: [
      ['2000–01', 'Groningen'], ['2001–02', 'Groningen'],
      ['2002–03', 'PSV Eindhoven'], ['2003–04', 'PSV Eindhoven'],
      ['2004–05', 'Chelsea'], ['2005–06', 'Chelsea'],
      ['2006–07', 'Chelsea'], ['2007–08', 'Real Madrid'],
      ['2008–09', 'Real Madrid'], ['2009–10', 'Bayern Munich'],
      ['2010–11', 'Bayern Munich'], ['2011–12', 'Bayern Munich'],
      ['2012–13', 'Bayern Munich'], ['2013–14', 'Bayern Munich'],
      ['2014–15', 'Bayern Munich'], ['2015–16', 'Bayern Munich'],
      ['2016–17', 'Bayern Munich'], ['2017–18', 'Bayern Munich'],
      ['2018–19', 'Bayern Munich'], ['2020–21', 'Groningen']
    ]
  },
  {
    name: 'Franck Ribéry',
    aliases: ['Ribery', 'Franck'],
    rows: [
      ['2000–01', 'Boulogne'], ['2001–02', 'Alès'],
      ['2002–03', 'Brest'], ['2003–04', 'Metz'],
      ['2004–05', 'Galatasaray'], ['2005–06', 'Marseille'],
      ['2006–07', 'Marseille'], ['2007–08', 'Bayern Munich'],
      ['2008–09', 'Bayern Munich'], ['2009–10', 'Bayern Munich'],
      ['2010–11', 'Bayern Munich'], ['2011–12', 'Bayern Munich'],
      ['2012–13', 'Bayern Munich'], ['2013–14', 'Bayern Munich'],
      ['2014–15', 'Bayern Munich'], ['2015–16', 'Bayern Munich'],
      ['2016–17', 'Bayern Munich'], ['2017–18', 'Bayern Munich'],
      ['2018–19', 'Bayern Munich'], ['2019–20', 'Fiorentina'],
      ['2020–21', 'Fiorentina'], ['2021–22', 'Salernitana'],
      ['2022–23', 'Salernitana']
    ]
  },
  {
    name: 'Didier Drogba',
    aliases: ['Drogba', 'Didier'],
    rows: [
      ['1998–99', 'Le Mans'], ['1999–00', 'Le Mans'],
      ['2000–01', 'Le Mans'], ['2001–02', 'Guingamp'],
      ['2002–03', 'Guingamp'], ['2003–04', 'Marseille'],
      ['2004–05', 'Chelsea'], ['2005–06', 'Chelsea'],
      ['2006–07', 'Chelsea'], ['2007–08', 'Chelsea'],
      ['2008–09', 'Chelsea'], ['2009–10', 'Chelsea'],
      ['2010–11', 'Chelsea'], ['2011–12', 'Chelsea'],
      ['2012', 'Shanghai Shenhua'], ['2013', 'Galatasaray'],
      ['2013–14', 'Galatasaray'], ['2014–15', 'Chelsea'],
      ['2015', 'Montreal Impact'], ['2016', 'Montreal Impact'],
      ['2017', 'Phoenix Rising']
    ]
  },
  {
    name: 'Wayne Rooney',
    aliases: ['Rooney', 'Wayne'],
    rows: [
      ['2002–03', 'Everton'], ['2003–04', 'Everton'],
      ['2004–05', 'Manchester United'], ['2005–06', 'Manchester United'],
      ['2006–07', 'Manchester United'], ['2007–08', 'Manchester United'],
      ['2008–09', 'Manchester United'], ['2009–10', 'Manchester United'],
      ['2010–11', 'Manchester United'], ['2011–12', 'Manchester United'],
      ['2012–13', 'Manchester United'], ['2013–14', 'Manchester United'],
      ['2014–15', 'Manchester United'], ['2015–16', 'Manchester United'],
      ['2016–17', 'Manchester United'], ['2017–18', 'Everton'],
      ['2018–19', 'DC United'], ['2019', 'DC United'],
      ['2019–20', 'Derby County'], ['2020–21', 'Derby County']
    ]
  }
];

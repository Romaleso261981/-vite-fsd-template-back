const mockdataEliteIronGates = [
  {
    id: "1",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/5125569884_vorota-kovani-rozpashni.jpg",
    code: "B-0101",
    category: "elitniKovaniVorota",
    cost: 7400,
    date: "August 18, 2022"
  },
  {
    id: "2",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3311842859_vorota-kovani-z.jpg",
    code: "B-0102",
    category: "elitniKovaniVorota",
    cost: 6500,
    date: "August 27, 2022"
  },
  {
    id: "3",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3336002607_elitni-kovani-vorota.jpg",
    code: "B-01101",
    category: "elitniKovaniVorota",
    cost: 6800,
    date: "September 9, 2022"
  },
  {
    id: "4",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3336002977_kovani-vorota-z.jpg",
    code: "B-01149",
    category: "elitniKovaniVorota",
    cost: 500,
    date: "September 12, 2022"
  },
  {
    id: "5",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3336017347_kovani-vorota.jpg",
    code: "B-01147",
    category: "elitniKovaniVorota",
    cost: 4400,
    date: "September 12, 2022"
  },
  {
    id: "6",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3336016848_elitni-kovani-vorota.jpg",
    code: "B-01151",
    category: "elitniKovaniVorota",
    cost: 5200,
    date: "September 12, 2022"
  },
  {
    id: "7",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/3336014558_kovani-rozpashni-vorota.jpg",
    code: "B-01108",
    category: "elitniKovaniVorota",
    cost: 8800,
    date: "September 12, 2022"
  },
  {
    id: "8",
    title: "КОВАНІ ВОРОТА З МОНТАЖЕМ",
    image: "https://images.prom.ua/5127091487_rozpashni-kovani-vorota.jpg",
    code: "B-01110",
    category: "elitniKovaniVorota",
    cost: 4500,
    date: "September 12, 2022"
  },
  {
    id: "9",
    title: "КОВАНІ ВОРОТА ТА ХВІРТКА",
    image: "https://images.prom.ua/5127091487_rozpashni-kovani-vorota.jpg",
    code: "B-01111",
    category: "elitniKovaniVorota",
    cost: 9400,
    date: "September 12, 2022"
  },
  {
    id: "10",
    title: "РОЗПАШНІ АЖУРНІ КОВАНІ ВОРОТА",
    image: "https://images.prom.ua/3336025866_rozpashni-azhurni-kovani.jpg",
    code: "B-01120",
    category: "elitniKovaniVorota",
    cost: 5200,
    date: "September 12, 2022"
  },
  {
    id: "11",
    title: "ВОРОТА З КОВКОЮ",
    image: "https://images.prom.ua/3336021526_vorota-z-kovkoyu.jpg",
    code: "B-01116",
    category: "elitniKovaniVorota",
    cost: 5000,
    date: "September 12, 2022"
  },
  {
    id: "12",
    title: "КОВАНІ ВОРОТА",
    image: "https://images.prom.ua/3336044198_kovani-vorota.jpg",
    code: "B-01141",
    category: "elitniKovaniVorota",
    cost: 6900,
    date: "September 12, 2022"
  },
  {
    id: "13",
    title: "КОВАНІ ВОРОТА З ХВІРТКОЮ",
    image: "https://images.prom.ua/3336032614_kovani-vorota.jpg",
    code: "B-0140",
    category: "elitniKovaniVorota",
    cost: 6000,
    date: "September 12, 2022"
  },
  {
    id: "14",
    title: "КОВАНІ ВОРОТА З ХВІРТКОЮ",
    image: "https://images.prom.ua/3330538370_kovani-vorota-z.jpg",
    code: "B-0193",
    category: "elitniKovaniVorota",
    cost: 7000,
    date: "September 12, 2022"
  },
  {
    id: "15",
    title: "ВОРОТА КОВАНІ РОЗПАШНІ",
    image: "https://images.prom.ua/3330538944_vorota-kovani-rozpashni.jpg",
    code: "B-0187",
    category: "elitniKovaniVorota",
    cost: 6400,
    date: "September 12, 2022"
  },
  {
    id: "16",
    title: "ВОРОТА КОВАНІ ВІДКАТНІ",
    image: "https://images.prom.ua/3336017472_vorota-kovani-vidkatni.jpg",
    code: "B-01103",
    category: "elitniKovaniVorota",
    cost: 6200,
    date: "September 12, 2022"
  }
];

async function getAllEliteIronGates(req, res) {
  try {
    return res.status(200).json({
      status: "success",
      code: 200,
      mockdataEliteIronGates
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getAllEliteIronGates;

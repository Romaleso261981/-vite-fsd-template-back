const productsGroup = [
  {
    id: "1",
    title: "ЕЛІТНІ КОВАНІ ВОРОТА",
    image: "https://images.prom.ua/2332731040_2332731040.jpg",
    code: "З-0101",
    cost: 1,
    category: "kovanye-vorota-profnastila",
    to: "/elitni-kovani-vorota",
    date: "August 18, 2022",
    description:
      "Понад 25 років працюємо на ринку України. Потужність нашого виробництва дозволяє працювати нам не тільки в роздріб,а також з оптовими покупцями. Ковані вироби виготовляємо будь якої складності, якість гарантована. Виготовляємо ворота, забори, альтанки, ковані лавки, сходи, перила, монгали та грилі, прибори для каміну, грати, козирки, ганки та багато іншого"
  },
  {
    id: "2",
    title: "ВОРОТА З ПРОФНАСТИЛОМ І КОВАНИМИ ЕЛЕМЕНТАМИ",
    image: "https://images.prom.ua/2607060348_2607060348.jpg",
    code: "З-0102",
    cost: 1,
    category: "vorota-profnastilom-kovanimi",
    to: "/vorota-profnastilom-kovanimi",
    description:
      "Понад 25 років працюємо на ринку України. Потужність нашого виробництва дозволяє працювати нам не тільки в роздріб,а також з оптовими покупцями. Ковані вироби виготовляємо будь якої складності, якість гарантована. Виготовляємо ворота, забори, альтанки, ковані лавки, сходи, перила, монгали та грилі, прибори для каміну, грати, козирки, ганки та багато іншого",
    date: "August 27, 2022"
  },
  {
    id: "3",
    title: "КОВАНІ КОЗИРКИ",
    image: "https://images.prom.ua/3264470453_3264470453.jpg",
    code: "З-0103",
    cost: 1,
    category: "kovaniGrati",
    to: "/kovani-kozirki",
    description:
      "Понад 25 років працюємо на ринку України. Потужність нашого виробництва дозволяє працювати нам не тільки в роздріб,а також з оптовими покупцями. Ковані вироби виготовляємо будь якої складності, якість гарантована. Виготовляємо ворота, забори, альтанки, ковані лавки, сходи, перила, монгали та грилі, прибори для каміну, грати, козирки, ганки та багато іншого",
    date: "September 9, 2022"
  }
];

async function getAllProductsGroup(req, res) {
  try {
    return res.status(200).json({
      status: "success",
      code: 200,
      productsGroup
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getAllProductsGroup;

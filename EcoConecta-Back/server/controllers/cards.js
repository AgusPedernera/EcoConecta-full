import api from '../api/cards.js';

const getCardsCompra = async (req, res) => {
    const cards = await api.getCardsCompra();
    res.json(cards);
};
const getCardsDona = async (req, res) => {
    const cards = await api.getCardsDona();
    res.json(cards);
};
const getCardsDonaRopa = async (req, res) => {
    const cards = await api.getCardsDonaRopa();
    res.json(cards);
};
const getCardsDonaAlimentos = async (req, res) => {
    const cards = await api.getCardsDonaAlimentos();
    res.json(cards);
};
const getCardsDonaUtiles = async (req, res) => {
    const cards = await api.getCardsDonaUtiles();
    res.json(cards);
};
const getCard = async (req, res) => {
    const id = req.params.id;
    
    const card = await api.getCard(id);
    res.json(card);
};

export default{
    getCardsCompra,
    getCardsDona,
    getCardsDonaAlimentos,
    getCardsDonaRopa,
    getCardsDonaUtiles,
    getCard
}
import config from '../config.js';
import Model from '../models/cards.js';

const model = Model.get(config.PERSISTENCE_TYPE);

const getCardsDona = async () => await model.readCardsDona();
const getCardsCompra = async () => await model.readCardsCompra();
const getCardsDonaRopa = async () => await model.readCardsDonaRopa();
const getCardsDonaAlimentos = async () => await model.readCardsDonaAlimentos();
const getCardsDonaUtiles = async () => await model.readCardsDonaUtiles();
// const getCardsCompra = async () => await.model.readCardsCompra();
// const getCardsCompra = async () => await.model.readCardsCompra();

const getCard = async (id) => {
    const card = await model.readCard(id);
    return card;

};

export default{
    getCardsDona,
    getCardsDonaRopa,
    getCardsDonaAlimentos,
    getCardsDonaUtiles,
    getCardsCompra,
    getCard
}

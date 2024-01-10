import mongoose from 'mongoose';
import MongoDB from '../services/DB/MongoDB.js';


const cardsSchema = mongoose.Schema({
    nombre: String,
    categoria: String,
    instagram: String,
    direccion: String,
    telefono: Number,
    pagina_web: String,
    comentarios: String
});

const cardsModel = mongoose.model('cards', cardsSchema);

class CardModelMongoDB {

    async readCardsDona() {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const cards = await cardsModel.find({tipo:'dona'});
            return cards;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener la información: ${error.message}`);
            return [];
        }
    };
    async readCardsDonaRopa() {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const cards = await cardsModel.find({tipo:'dona', categoria:'ropa'});
            return cards;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener la información: ${error.message}`);
            return [];
        }
    };
    async readCardsDonaAlimentos() {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const cards = await cardsModel.find({tipo:'dona', categoria:'alimentos'});
            return cards;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener la información: ${error.message}`);
            return [];
        }
    };
    async readCardsDonaUtiles() {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const cards = await cardsModel.find({tipo:'dona', categoria:'utiles escolares'});
            return cards;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener la información: ${error.message}`);
            return [];
        }
    };
    async readCardsCompra() {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return [];
        }
        try {
            const cards = await cardsModel.find({tipo:'compra'});
            return cards;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener la información: ${error.message}`);
            return [];
        }
    };

    async readCard(id) {
        if (! await MongoDB.connectDB()) {
            console.error('Conexión no establecida');
            return {};
        }
        try {
            // const products = await ProductsModel.find({ _id: id });
            // if (products.length === 0) {
            //     return {};
            // }
            // return products[0];
            // const product = await ProductsModel.findOne({ _id: id }) || {};
            // return product;
            const card = await cardsModel.findById(id) || {};
            return card;
        } catch (error) {
            console.error(`Se produjo un error al intentar obtener el producto especificado: ${error.message}`);
            return {};
        }
    }



}

export default CardModelMongoDB
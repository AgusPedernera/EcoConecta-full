import express from 'express';

import controller from '../controllers/cards.js';

const router = express.Router();

router.get('/compra/', controller.getCardsCompra);
router.get('/dona/', controller.getCardsDona);
router.get('/dona/ropa', controller.getCardsDonaRopa);
router.get('/dona/alimentos', controller.getCardsDonaAlimentos);
router.get('/dona/utiles', controller.getCardsDonaUtiles);
router.get('/dona/libros', controller.getCardsDonaUtiles);
router.get('/dona/medicamentos', controller.getCardsDonaUtiles);
router.get('/dona/juguetes', controller.getCardsDonaUtiles);
router.get('')

router.get('/:id', controller.getCard);

export default router
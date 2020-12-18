import express from 'express';
import isValidateCardData from '../validation/card.js';
import card from '../service/card.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  if (isValidateCardData(req.body)) {
    const result = await card.createCard(req.db.models, req.body);
    res.status(200).send(result);
  }

  res.status(400).send({
    message: 'invalid data',
  });
});

export default router;

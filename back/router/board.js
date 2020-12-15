import express from 'express';
import isValidBoardData from '../validation/board.js';
import board from '../service/board.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await board.getBoard(req.db.models);
  res.status(200).send(result);
});

router.post('/', async (req, res, next) => {
  if (isValidBoardData(req.body)) {
    const result = await board.createBoard(req.db.models, req.body);
    res.status(200).send(result);
  }
  next();
});

export default router;

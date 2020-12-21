import express from 'express';
import isValidListData from '../validation/list.js';
import list from '../service/list.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (isValidListData(req.body)) {
      const result = await list.createList(req.db.models, req.body);
      res.status(200).json(result);
    }
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;

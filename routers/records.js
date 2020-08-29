const { Router } = require('express');
const bodymen = require('bodymen');

const { dateStringValidator } = require('../utils/validator');
const { query } = require('../controllers/controller');

const router = new Router();

/**
 * @api {post} /records
 * @param startDate
 * @param endDate
 * @param minCount
 * @param maxCount
 */
router.post('/records', bodymen.middleware({
  startDate: {
    type: String,
    required: true,
    validate: dateStringValidator
  },
  endDate: {
    type: String,
    required: true,
    validate: dateStringValidator
  },
  minCount: {
    type: Number,
    required: true,
    min: 0
  },
  maxCount: {
    type: Number,
    required: true,
    min: 0
  }
}), query)

module.exports =  router;
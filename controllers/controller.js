const { success } = require('../utils/response');
const Record = require('../models/records');

const query = ({ bodymen: { body } }, res, next) => {
  const { startDate, endDate, minCount, maxCount } = body;
  return Record.aggregate([
    {
      $match: {
        $and: [
          { createdAt: { $lte: new Date(endDate), $gte: new Date(startDate) } },
        ],
      },
    },
    { $unwind: "$counts" },
    {
      $group: {
        _id: "$_id",
        key: { $first: "$key" },
        createdAt: { $first: "$createdAt" },
        totalCount: {
          $sum: "$counts",
        },
      },
    },
    {
      $match: { $and: [{ totalCount: { $gte: minCount, $lte: maxCount } }] },
    },
    { $unset: ["_id"] },
  ])
    .exec()
    .then((records) => ({ records }))
    .then(success(res))
    .catch(next);
}
  

module.exports = {
  query
}
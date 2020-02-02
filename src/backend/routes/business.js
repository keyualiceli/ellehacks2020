const router = require('express').Router();
let Business = require('../models/business.model');
let Charity = require('../models/charity.model');

router.route('/').get((req, res) => {
  Business.find()
    .then(business => res.json(business))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const values = req.body.values;
  const give = req.body.give;

  const newBusiness = new Business({
    name,
    values,
    give,
  });

  newBusiness.save()
    .then(function (newBusiness) {
      Charity.find({
        mission: newBusiness.values,
        needs: newBusiness.give
      }).then((charities) => {
        res.json(charities)
      }).catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

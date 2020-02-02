const router = require('express').Router();
let Charity = require('../models/charity.model');
let Business = require('../models/business.model');

router.route('/').get((req, res) => {
  Charity.find()
    .then(charity => res.json(charity))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const mission = req.body.mission;
  const needs = req.body.needs;

  const newCharity = new Charity({
    name,
    mission,
    needs,
  });

  newCharity.save()
      .then(function (newCharity) {
        Business.find({
          values: newCharity.mission,
          give: newCharity.needs
        }).then((business) => {
          res.json(business)
        }).catch(err => res.status(400).json('Error: ' + err))
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

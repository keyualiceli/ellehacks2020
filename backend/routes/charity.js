const router = require('express').Router();
let Charity = require('../models/charity.model');

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
    .then(() => res.json('Charity added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

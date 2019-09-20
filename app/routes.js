// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const marked = require('marked')
const router = express.Router()

// Local dependencies
const utils = require('../lib/utils.js')


// Conditions 1

router.post('/3/other-condition-1-logic', function (req, res) {

	var conditionCount = req.session.data['condition-count']
  let otherconditions = req.session.data['other-conditions']

  if (conditionCount == 3) {
    res.redirect('conditio?count=3')
  } else if (conditionCount == 2) {
    res.redirect('condition?count=2')
  } else {
    res.redirect('condition')
  }

})



router.post('/3/other-conditions-1-logic', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let otherconditions = req.session.data['other-conditions']

  if (otherconditions === 'yes') {
    res.redirect('condition-2')
  } else {
    res.redirect('done')
  }

})

// Conditions 2

router.post('/3/other-conditions-2-logic', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let otherconditions = req.session.data['other-conditions']

  if (otherconditions === 'yes') {
    res.redirect('condition-3')
  } else {
    res.redirect('done')
  }
})

module.exports = router
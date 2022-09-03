const express = require('express')
const router = express.Router()

const USERS = []

router.get('/', (req, res) => {
  res.send({USERS})
})

router.post('/', (req, res) => {
  let user = req.body
  USERS.push(user)
  res.send({userCreated: user})
})


module.exports = router
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200)
  res.send(`Slack Webhook sample successfully running. Set this URL with the /webhook path as your apps Event notification endpoint URL.`)
})

app.post('/webhook', (req, res) => {

  var response

  console.log(req.headers)
  console.log(req.body)

    if(req.body.type === 'url_verification') {
      response = {
        message: {
            "challenge": req.body.challenge,
        },
        status: 200
      }

      console.log(response.message)

      res.status(response.status)
      res.json(response.message)
    } else {
      response = { message: 'Authorized request to Slack Webhook sample.', status: 200 }

      console.log(response.message)

      res.status(response.status)
      res.json(response)

      // business logic here, example make API request to Slack or 3rd party
  } 
})

module.exports = app;

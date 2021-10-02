const axios = require('axios')
const api = axios.create({
  baseURL:'https://axie-infinity.p.rapidapi.com',
  headers: {
    'x-rapid-host': 'axie-infinity.p.rapidapi.com',
    'x-rapidapi-key':'43d539219emsh5cfd0baf318ac50p1412dbjsn3a12f3e86d7e'
  }
})
module.exports = api
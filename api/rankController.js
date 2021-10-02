const api = require('./api.js')
const base = {
  url: 'get-update',
  getRank: (id) => base.url + '/' + id
}
module.exports.getRank = (id) => {
  return api.get(base.getRank(id))
}

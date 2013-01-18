var EventEmitter = require('events').EventEmitter

var hashchange = module.exports = new EventEmitter()

window.addEventListener('hashchange', function () {
  var hash = window.location.hash.substring(1)
  hashchange.emit('change', hash)
})

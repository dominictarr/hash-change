var EventEmitter = require('events').EventEmitter

var hashchange = module.exports = new EventEmitter()

window.addEventListener('hashchange', function () {
  hashchange.emit('change', hashchange.hash())
})

hashchange.hash = function () {
  return window.location.hash.substring(1)
}

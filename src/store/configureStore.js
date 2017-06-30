//Dynamic iport aren't suppored by ES6, so I'm using require instead of import.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} 
else {
  module.exports = require('./configureStore.dev');
}
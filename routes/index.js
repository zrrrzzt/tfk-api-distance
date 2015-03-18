var handlers = require('../handlers');
var routes;

routes = [
  {
    method: 'GET',
    path: '/distance/{origin}/{destination}',
    handler: handlers.getDistance
  }
];

module.exports = routes;
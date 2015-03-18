'use strict';

var distance = require('google-distance');
var xmlify = require('xmlify');
var startEmbedUrl= 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyAu4oe2bKCeP4AnAyo78KL_XZvrS-WVIcw&mode=walking&origin=';

function getDistance(request, reply) {

  var origin = request.params.origin;
  var destination = request.params.destination;
  var embedUrl = startEmbedUrl + origin + '&destination=' + destination;

  distance.get({
      mode: 'walking',
      origin: origin,
      destination: destination
    },
    function(err, data) {
      if (err) {
        if (request.query.format === 'xml') {
          reply(xmlify(err)).type('application/xml');
        } else {
          reply(err);
        }
      } else {
        date.directionsEmbedUrl = embedUrl;
        if (request.query.format === 'xml') {
          reply(xmlify(data)).type('application/xml');
        } else {
          reply(data);
        }
      }
    });

}

module.exports.getDistance = getDistance;
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port:process.env.PORT || 5000, path: '/peerjs'});


/*

var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp', proxied: true});

 */

const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa')
const request = require('request')

/*
* This work, but can be simplified with example below
*/

const kidMock = `M6pX7RHoraLsprfJeRCjSxuURhc`;
const tokenJWT = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM`;

const decoded = jwt.decode(tokenJWT, {complete: true});
if (decoded.header) {
    // mock
    decoded.header.kid = kidMock;
    const kid = decoded.header.kid;

    const client = jwksClient({
        cache: true,
        jwksUri: 'https://login.microsoftonline.com/933c9cbe-35d3-4416-abbd-ddd1bca5879c/discovery/v2.0/keys'
    });

    client.getSigningKey(kid, (err, key) => {
        const signinKey = key.publicKey
        console.log(signinKey)
        jwt.verify(tokenJWT, signinKey, (err, verified) => {
            if (err) {
                console.log('should return an HTTP error')
            } else {
                console.log('should call next()')
            }
        })
    })
}


/*
* Example from doc, but cannot test so far (need real token)
*/
const client = jwksClient({
    cache: true,
    jwksUri: 'https://login.microsoftonline.com/933c9cbe-35d3-4416-abbd-ddd1bca5879c/discovery/v2.0/keys'
});

function getKey(header, callback){
    client.getSigningKey(header.kid, function(err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

jwt.verify(token, getKey, options, function(err, decoded) {
    if (err) {
        console.log('should return http error')
    } else {
        if (decoded) {
            console.log('should call next()')
        } else {
            console.log('should return http error (server error ?)')
        }
    }
    console.log(decoded.foo) // bar
});
/**
 var config = require('@pr/node-pkg-cdb-client/configuration');
 
 config.wait({...})
     .then(() => config.nom_fichier.clef);
 */
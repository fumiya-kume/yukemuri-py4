const fetch = require('node-fetch');

module.exports = function (context, req) {
    fetch('https://teratail.com/api/v1/tags/ruby/questions')
        .then(response => response.json())
        .then(json => {
            context.res = { body: json };
            context.done();
        })
};

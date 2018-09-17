const fetch = require('node-fetch');

module.exports = function (context, req) {
    const tagName = req.query.tagName;
    fetch('https://teratail.com/api/v1/tags/" + tagName + "/questions')
        .then(response => response.json())
        .then(json => {
            context.res = { body: json };
            context.done();
        })
};

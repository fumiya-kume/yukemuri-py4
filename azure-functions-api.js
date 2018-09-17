const FeedParser = require('feedparser');
const Request = require('request');
const fetch = require('node-fetch');

module.exports = function (context, req) {

    // const hoge = async () => {

    // }

    function SearchTeratail() {
        fetch("https://teratail.com/api/v1/tags/ruby/questions")
            .then(res => {
                context.res = { body: res.json() };
                context.done();
            })
    }

    SearchTeratail()
    // context.res = { body: "response" };
    // context.done();
};

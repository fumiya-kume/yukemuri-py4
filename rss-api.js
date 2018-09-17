const FeedParser = require('feedparser');
const Request = require('request');

module.exports = function (context, req) {
    const items = []

    var feedparser = new FeedParser({});
    
    const teratailUrl = "https://teratail.com/rss/feed/all/"
    const tagId = req.query.tagId
    const requestUrl = teratailUrl + tagId

    const request = Request(requestUrl);
 
    request.on('response', function (res) {
        res.pipe(feedparser)
    });

    feedparser.on('readable', function () {
        while (item = this.read()) {
            items.push(item);
        }
    });

    feedparser.on('end', function () {

        context.res = { body: items };
        context.done();
    });
};

var makeShortUrl = require("../lib/short-url").makeShortUrl;

makeShortUrl("https://www.google.com/", { key: 'your_api_key' }, function (error, data) {
  if (error) {
    return console.log('ERROR', error);
  }

  console.log('URL', data);
});

makeShortUrl("https://www.google.com/", { key: 'your_api_key' })
  .then((url) => {
    console.log('URL', url);
  })
  .catch((err) => {
    console.log('ERROR', error);
  });

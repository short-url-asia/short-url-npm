var makeShortUrl = require("../lib/short-url").makeShortUrl;

makeShortUrl("https://www.google.com/", {}, function (error, data) {
  if (error) {
    return console.log('ERROR', data);
  }

  console.log('URL');
  console.log(data);
});

makeShortUrl("https://www.google.com/")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.log(error);
  });

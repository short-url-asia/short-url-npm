var makeShortUrl = require("../lib/short-url").makeShortUrl;

makeShortUrl("http://kreata.ee/iso-8859-15.php", {}, function (error, data) {
  if (error) {
    return console.log('ERROR', data);
  }

  console.log('URL');
  console.log(data);
});

makeShortUrl("http://kreata.ee/iso-8859-15.php")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.log(error);
  });

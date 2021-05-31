# ShortURL – A free URL Shortener for Node JS

## Install

    npm install @short-url/shorturl

## Usage

See examples folder for a complete example

## Fetch from URL

`shortURL.makeShortUrl(url, options, callback)`

Where

  * **url** is the url to make
  * **options** is an options object
  * **callback** is the callback to run - `callback(error, body)`

Example

    var makeShortUrl = require("@short-url/shorturl").makeShortUrl;

    makeShortUrl("https://www.google.com/", {}, function (error, data) {
        if (error) {
            return console.log('ERROR', data);
        }

        console.log('URL');
        console.log(data);
    });

    // With async function
    makeShortUrl("https://www.google.com/")
        .then((url) => {
            console.log(url);
        })
        .catch((err) => {
            console.log(error);
        });
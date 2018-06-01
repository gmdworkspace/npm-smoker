# npm-smoker

Need to do smoke test for you APIs? Just clone npm-smoker and config the JSON.

# Usage

Clone the repo

```git clone https://github.com/gmdworkspace/npm-smoker.git```

Give your API details on smoker.json and run the test by

``` npm test ```

# Examples - Smoker.json
* name, url, method and successCode are required values.
 ```
      {
      "name": "Facebook",
      "url": "https://facebook.com",
      "method": "get",
      "successCode": 200
      }
```

* To add headers
 ```
      {
      "name": "Facebook",
      "url": "https://facebook.com",
      "headers": {
        "Accept":"text/html"
      },
      "method": "get",
      "successCode": 200
      }
```

* If you need request body to be added for requests like POST or PUT. 
 ```
      {
      "name": "Facebook",
      "url": "https://facebook.com",
      "headers": {
        "Accept":"text/html"
      },
      data: {
        "sample": "test"
      },
      "method": "post",
      "successCode": 200
      }
```


## RVV API Converter to obtain a actually readable json instead of that messy xml crap

* Request URL and Parameters was obtained by using NetCapture App for android. Might be usefull to obtain stop id's via api in the future.
* For now only singe step rides (departure - arrival) are supported.
* It will most likely break if the RVV Api is ever updated

### Requirement

* Request URL with Parameters captured.

### Usage

```
xyz.getData(url).then(rides => {
    console.log(rides);
}).catch(err => {
    console.log(error);
});
```

`url` is the request url including query parameters.


### Tests

Rename and fill `example_config.json` to `config.json`.

# json-normalizer

A small, lightweight module for normalizing JSON property names and
values. In keeping with the Unix philosophy, it does one thing and does
it well.

# example

```js
var json = {
  ember_is_easy_no_it_isnt: true,
  rails_is_omakase: 123
};

var processor = new Processor(json);
processor.camelizeKeys();
console.log(processor.json);
```

This prints:

```js
{
  emberIsEasyNoItIsnt: true,
  railsIsOmakase: 123
}
```

# license

MIT

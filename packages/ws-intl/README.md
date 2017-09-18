# `@mercateo/ws-intl`

[![Build Status](https://travis-ci.org/Mercateo/ws-intl.svg?branch=master)](https://travis-ci.org/Mercateo/ws-intl)

This module provides some components for passing i18n messages between components/modules.

## Usage

`@mercateo/ws-intl` exports two components `<Translations />` and `<Translate />`. You pass a `messages` object into `<Translations />` and can get it back via `<Translate />`. Nothing more.

```js
import React from 'react';
import { render } from 'react-dom';
import { Translations, Translate } from '@mercateo/ws-intl';

// choose your translations with your custom logic
// (based on query params, user settings... )
// or load them async with `import()`
// or just write them down here:
const messages = {
  hello(name) {
    return `Hello ${name}!`
  }
};

const Foo = ({ name }) =>
  <Translate>
    {({ hello }) =>
      <p>{hello(name)}</p>}
  </Translate>;

render(
  <Translations messages={messages}>
    <Foo name="otbe" />
  </Translations>,
  document.getElementById('app')
);
```

## Examples

Have a look at [`examples/usage/`](./examples/usage).

import React from 'react';
import { render } from 'react-dom';
import { Translate, Translations } from '@mercateo/ws-intl';

const I18N = { hello: (data: { name: string }) => `Hello ${data.name}!` };

render(
  <Translations messages={I18N}>
    <div>
      <Translate>
        {(messages: typeof I18N) => <span>{messages.hello({ name: 'World' })}</span>}
      </Translate>
    </div>
  </Translations>,
  document.getElementById('app')
);

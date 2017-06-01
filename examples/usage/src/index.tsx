import React from 'react';
import { render } from 'react-dom';
import { Consumer, Provider } from '@mercateo/ws-intl';

const I18N = { hello: (data: { name: string }) => `Hello ${data.name}!` };

render(
  <Provider messages={I18N}>
    <div>
      <Consumer>
        {(messages: typeof I18N) => <span>{messages.hello({ name: 'World' })}</span>}
      </Consumer>
    </div>
  </Provider>,
  document.getElementById('app')
);

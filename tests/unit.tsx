import React, { Component } from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { Provider, Consumer } from '../src';

const I18N = { foo: (data: { test: string }) => 'foo' + data.test };

describe('ws-intl', () => {
  it('should pass messages from provider to consumer', () => {
    const c = mount(
      <Provider messages={I18N}>
        <div>
          <Consumer>
            {(messages: typeof I18N) => <span>{messages.foo({ test: '1' })}</span>}
          </Consumer>
        </div>
      </Provider>
    );

    expect(c.contains(<span>{I18N.foo({ test: '1' })}</span>)).toBeTruthy();
  });

  it('should pass messages via context (used internally or by custom consumer impl)', () => {
    let messages: typeof I18N | null = null;

    class MyConsumer extends Component<{}, {}> {
      static contextTypes = {
        messages: PropTypes.any.isRequired
      };

      componentDidMount() {
        messages = this.context.messages;
      }

      render() {
        return null;
      }
    }

    mount(
      <Provider messages={I18N}>
        <MyConsumer />
      </Provider>
    );

    expect(messages).toBeTruthy();
    expect(messages!).toBe(I18N);
  });
});

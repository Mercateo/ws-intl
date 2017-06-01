import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface ConsumerProps {
  children: <T>(messages: T) => JSX.Element;
}

export class Consumer extends Component<ConsumerProps, {}> {
  static contextTypes = {
    messages: PropTypes.any.isRequired
  };

  render() {
    return this.props.children(this.context.messages);
  }
}

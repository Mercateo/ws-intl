import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface TranslateProps {
  children: <T>(messages: T) => JSX.Element;
}

export class Translate extends Component<TranslateProps, {}> {
  static contextTypes = {
    messages: PropTypes.any.isRequired
  };

  render() {
    return this.props.children(this.context.messages);
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export interface TranslationsProps {
  messages: any;
  children: JSX.Element;
}

export class Translations extends Component<TranslationsProps, {}> {
  static childContextTypes = {
    messages: PropTypes.any.isRequired
  };

  getChildContext() {
    return {
      messages: this.props.messages
    };
  }

  render() {
    return this.props.children;
  }
}


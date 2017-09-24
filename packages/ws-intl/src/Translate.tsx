import { Component } from 'react';
import PropTypes from 'prop-types';

// TODO enhance typings after switching to @types/react 15.x
export interface TranslateProps {
  // children: <T>(messages: T) => JSX.Element;
}

export class Translate extends Component<TranslateProps> {
  static contextTypes = {
    messages: PropTypes.any.isRequired
  };

  render() {
    return (this.props.children as any)(this.context.messages);
  }
}

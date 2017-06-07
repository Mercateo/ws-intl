import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Switch,
  Redirect,
  Route,
  RouteComponentProps
} from 'react-router-dom';
import { Translate, Translations } from '@mercateo/ws-intl';

type State = { messages?: I18N };
type Props = RouteComponentProps<{ locale: string }>;

class App extends Component<Props, State> {
  state: State = {};

  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({});

    _import<I18N>(
      `../dist-i18n/${nextProps.match.params.locale}.js`
    ).then(messages => this.setState({ messages }));
  }

  render() {
    if (this.state.messages == null) {
      return null;
    }

    return (
      <Translations messages={this.state.messages}>
        <div>
          <select
            value={this.props.match.params.locale}
            onChange={e =>
              this.props.history.push({ pathname: `/${e.target.value}` })}
          >
            <option>de_DE</option>
            <option>en_GB</option>
          </select>
          <br />
          <Translate>
            {(messages: I18N) => <span>{messages.appWelcome()}</span>}
          </Translate>
        </div>
      </Translations>
    );
  }
}

render(
  <HashRouter>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/de_DE" />} />
      <Route path="/:locale" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('app')
);

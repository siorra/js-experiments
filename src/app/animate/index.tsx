import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { AnimateSimple } from './AnimateSimple';


type Props = {
};
type State = {
};

const rawStyle = {
  link: {
    display: 'inline-block',
    padding: '10px',
  }
};

export class Animate extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/animate`}>Simple rAF</Link>
        </div>
        <Switch>
          <Route path="/animate" component={AnimateSimple} />
        </Switch>
      </div>
    );
  }
}
import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Conjunction } from './Conjunction';

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

export class NN extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div>
          <Link style={rawStyle.link} to={`/nn/and`}>Conjunction</Link>
        </div>
        <Switch>
          <Route path="/nn/and" component={Conjunction} />
        </Switch>
      </div>
    );
  }
}

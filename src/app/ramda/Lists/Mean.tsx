import React from 'react';
import * as R from 'ramda';

type Props = {
};
type State = {
};

export class Mean extends React.PureComponent<Props, State> {
  render() {
    R.mean([2, 7, 9]); //=> 6
    R.mean([]); //=> NaN

    return (
      <div>
        <h3>R.mean</h3>
        <div>{`R.and(true, true) = ${R.and(true, true)}`}</div>
        <div>{`R.and(true, false) = ${R.and(true, false)}`}</div>
        <div>{`R.and(false, true) = ${R.and(false, true)}`}</div>
        <div>{`R.and(false, false) = ${R.and(false, false)}`}</div>
      </div>
    );
  }
}

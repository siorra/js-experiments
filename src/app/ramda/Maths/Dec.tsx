import React from 'react';
import * as R from 'ramda';

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

const dec = R.pipe(
  R.dec
);

export class Dec extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <h3>Dec</h3>
        <h3>Result: {dec('1' as any)}</h3>
        <h3>Result: {String(R.dec(1))}</h3>
        <h3>Result: {String(R.dec(1))}</h3>
        <h3>Result: {dec('0.1' as any)}</h3>
        <h3>Result: {String(R.dec(0.1))}</h3>
      </div>
    );
  }
}
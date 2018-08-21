import React from 'react';
import { data } from './data/dataTest0';
import { runDijkstra } from './dijkstra';

type Props = {
};
type State = {
  result: string;
};

export class Dijkstra extends React.PureComponent<Props, State> {
  state = {
    result: '',
  }
  componentDidMount() {
    const result = runDijkstra(data, 1);
    this.setState({ result,  });
  }
  render() {
    const { result } = this.state;
    return (
      <div>
        <h3>Dijkstra</h3>
        <h5>{result}</h5>
      </div>
    );
  }
}
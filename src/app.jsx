import React from 'react';
import '../styles/index.scss';
import CounterComponent from './CounterComponent'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <CounterComponent/>
      </div>
    )
  }
}

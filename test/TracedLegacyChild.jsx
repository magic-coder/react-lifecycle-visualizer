import React, { Component } from 'react';
import { traceLifecycle } from '../src';

class LegacyChild extends Component {
  state = {}

  // eslint-disable-next-line no-useless-constructor
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.trace('custom:componentWillMount');
  }

  componentWillReceiveProps() {
    this.trace('custom:componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    this.trace('custom:shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    this.trace('custom:componentWillUpdate');
  }

  render() {
    this.trace('custom:render');
    return <this.LifecyclePanel/>;
  }

  componentDidMount() {
    this.trace('custom:componentDidMount');
  }

  componentDidUpdate() {
    this.trace('custom:componentDidUpdate');
  }

  componentWillUnmount() {
    this.trace('custom:componentWillUnmount');
  }

  updateState = () => {
    this.setState(() => {
      this.trace('custom:setState update fn');
      return {};
    }, () => {
      this.trace('custom:setState callback');
    });
  }
}

const TracedLegacyChild = traceLifecycle(LegacyChild);

export default TracedLegacyChild;

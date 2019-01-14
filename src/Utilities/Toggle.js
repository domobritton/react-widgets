import { Component } from 'react';

export default class Toggle extends Component {

    state = {
        on: false,
        select: ''
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            on: !this.state.on,
            select: e.currentTarget.value
        })
    }

  render() {
      const { children } = this.props;
    return children({
              on: this.state.on,
              toggle: this.toggle,
              select: this.state.select
    });
  }
}
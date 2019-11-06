import React, { Component } from 'react'

export default class TopBar extends Component {

state = { isHide: false };

hideBar = () => {
  const { isHide } = this.state

  window.screenY > this.prev ?
    !isHide && this.setState({ isHide: true })
    :
    isHide && this.setState({ isHide: false });

    this.prev = window.scrollY;
}

componentDidMount() {
  window.addEventListener( 'scroll', this.hideBar );
}

componentWillUnmount() {
  window.removeEventListener( 'scroll', this.hideBar );
}

  render() {
    const classHide = this.state.isHide ? 'hide' : "";
    return (
      <div className={`topbar ${classHide}`}>
        topbar
      </div>
    )
  }
}

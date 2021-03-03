import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HexGrid extends Component {
  static propTypes = {
    preserveAspectRatio: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    viewBox: PropTypes.objectOf(PropTypes.number),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    width: 800,
    height: 600,
    viewBox: {
      x: -50,
      y: -50,
      width: 100,
      height: 100
    },
    preserveAspectRatio: "xMidYMid meet"
  }

  render() {
    const { width, height, viewBox, preserveAspectRatio } = this.props
    return (
      <svg
        className="grid"
        preserveAspectRatio={preserveAspectRatio}
        width={width}
        height={height}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.props.children}
      </svg>
    );
  }
}

export const ViewBoxContext = React.createContext({ x: -50, y: -50, width: 100, height: 100 });
export const { Provider: ViewBoxProvider, Consumer: ViewBoxConsumer } = ViewBoxContext;

export default HexGrid;

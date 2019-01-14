import React from 'react';
import { Textfit } from 'react-textfit';
import './Mini.css';

class Mini extends React.PureComponent {
  render() {
    return (
      <div
        className="chip-card__mini"
        style={this.props.style}
        xs={this.props.size}>
        <Textfit mode="single">
          {this.props.children}
        </Textfit>
      </div>
    )
  }
}

export default Mini;

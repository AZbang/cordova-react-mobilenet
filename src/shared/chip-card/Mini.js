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
        {this.props.textFit ?
          (<Textfit mode="single">{this.props.children}</Textfit>) :
          (this.props.children)
        }
      </div>
    )
  }
}

export default Mini;

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Block.css';

class Block extends React.PureComponent {
  static defaultProps = {
    show: true
  }

  render() {
    return (
      <div
        className="chip-card__block"
        style={this.props.style}>
        <div className="chip-card__preview">
          {this.props.avatar &&
            <div className="chip-card__block__avatar">
              {this.props.avatar}
            </div>
          }
          <div className="chip-card__block__text">
            <div className="chip-card__block__text_title">
              {this.props.title}
            </div>
            <div className="chip-card__block__text__subtitle">
              {this.props.text}
            </div>
          </div>
        </div>
        <div className="chip-card__block__content">
          {this.props.header &&
            <div className="chip-card__block__content__header">
              {this.props.header}
            </div>
          }
          {this.props.children}
        </div>
        <div className="chip-card__block__buttons">
          {this.props.buttons}
        </div>
      </div>
    )
  }
}

export default Block;

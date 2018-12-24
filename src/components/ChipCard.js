import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './ChipCard.css';

class ChipCard extends React.PureComponent {
  render() {
    let style = {};
    if (this.props.position === 'top') style.top = this.props.show ? 10 : -200;
    else if (this.props.position === 'bottom') style.bottom = this.props.show ? 10 : -200;


    return (
      <Grid className="chip-card" fluid style={style}>
        <Row>
          <Col className="chip-card__block" style={this.props.style} xs={this.props.size}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ChipCard;

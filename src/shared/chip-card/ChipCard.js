import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring, presets} from 'react-motion';

import Block from './Block';
import Mini from './Mini';
import './ChipCard.css';

class ChipCard extends React.PureComponent {
  static defaultProps = {
    top: false,
    bottom: false,
    type: 'block',
    show: true,
  }

  createRoot = (id) => {
    const root = document.createElement('div');
    root.id = id;
    document.body.appendChild(root);
    console.log(root);
    return root;
  }
  rootTop = document.getElementById('chip-cards-top') || this.createRoot('chip-cards-top');
  rootBottom = document.getElementById('chip-cards-bottom') || this.createRoot('chip-cards-bottom');

  render() {
    const hidden = window.innerHeight/2 * (this.props.top ? -1 : 1);
    return ReactDOM.createPortal(
      <Motion
        defaultStyle={{y: hidden, opacity: 0}}
        style={{
          y: spring(this.props.show ? 0 : hidden),
          opacity: spring(1),
        }}>
        {({y}) =>
          <div className="chip-card">
            {this.props.type === 'block' ?
              <Block {...this.props} style={{transform: `translateY(${y}px)`}}></Block> :
              <Mini {...this.props} style={{transform: `translateY(${y}px)`}}></Mini>
            }
          </div>
        }
      </Motion>,
      this.props.top ? this.rootTop : this.rootBottom
    );
  }
}

export default ChipCard;

import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';

import Block from './Block';
import Mini from './Mini';
import './ChipCard.css';

class ChipCard extends React.PureComponent {
  defaultProps = {
    top: true,
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
    const margin = this.props.top ? 'marginTop' : 'marginBottom';
    const hidden = -window.innerHeight/2;
    return ReactDOM.createPortal(
      <Motion
        defaultStyle={{[margin]: hidden, opacity: 0}}
        style={{
          [margin]: spring(this.props.show ? 0 : hidden, {stiffness: 120, damping: 17}),
          opacity: spring(1),
        }}>
        {(style) =>
          <div className="chip-card">
            {this.props.type === 'block' ?
              <Block {...this.props} style={style}></Block> :
              <Mini {...this.props} style={style}></Mini>
            }
          </div>
        }
      </Motion>,
      this.props.top ? this.rootTop : this.rootBottom
    );
  }
}

export default ChipCard;

import React from 'react';
import { inject, observer } from 'mobx-react';

import CameraController from './CameraController';
import ChipCard from '../shared/chip-card/ChipCard';

@inject('mediaStore', 'modelStore')
@observer
class Playground extends React.Component {
  render() {
    const { mediaStore, modelStore } = this.props;

    return (
      <div className='Playground'>
        <CameraController/>
        <ChipCard top style={{fontSize: 14}}>
          Zoom the camera onto the flower to scan it
        </ChipCard>
        <ChipCard swipeable bottom>
          <h1>MOBILENET</h1>
          <p>This app created for testing onnxjs model</p>
        </ChipCard>
      </div>
    )
  }
}

export default Playground;

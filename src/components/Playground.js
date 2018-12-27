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
      <div className="Playground">
        <CameraController/>
        <ChipCard top>
          Наведите камеру на цветок, чтобы отсканировать его
        </ChipCard>
        <ChipCard swipeable bottom>
          <h1>MOBILENET</h1>
          <p>Это приложение создано для тестирования работоспобоности onnxjs</p>
        </ChipCard>
      </div>
    )
  }
}

export default Playground;

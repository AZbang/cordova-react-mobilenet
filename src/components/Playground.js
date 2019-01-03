import React from 'react';
import { inject, observer } from 'mobx-react';

import ChipCard from '../shared/chip-card/ChipCard';
import Camera from '../shared/camera/Camera';

@inject('mediaStore', 'modelStore')
@observer
class Playground extends React.Component {
  state = {
    snapshot: null,
  }

  onSnapshot = (img) => {
    this.setState({
      snapshot: img.src
    })
  }

  cameraController = () => {
    const { mediaStore } = this.props;

    if(mediaStore.stream) {
      return <Camera
        onSnapshot={this.onSnapshot}
        stream={mediaStore.stream}
        snapshotInterval={500}
        snapshotSize={224}
      />
    }

    if(mediaStore.error) {
      return (
        <ChipCard top swipeable flow>
          Your device not support webrtc camera :(
        </ChipCard>
      )
    }
  }


  render() {
    const { mediaStore, modelStore } = this.props;

    return (
      <div className='Playground'>
        {this.cameraController()}
        <ChipCard top style={{fontSize: 14}}>
          Zoom the camera onto the flower to scan it
        </ChipCard>
        <ChipCard swipeable bottom>
          <img src={this.state.snapshot} />
        </ChipCard>
      </div>
    )
  }
}

export default Playground;

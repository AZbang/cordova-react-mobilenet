import React from 'react';
import { inject, observer } from 'mobx-react';
import Camera from '../shared/camera/Camera';
import ChipCard from '../shared/chip-card/ChipCard';

@inject('mediaStore', 'modelStore')
@observer
class CameraController extends React.Component {
  onSnapshot = (img) => {
    img.style.position = 'absolute';
    img.style.top = 0;
    document.body.appendChild(img);
  }

  render() {
    const { mediaStore } = this.props;

    if(mediaStore.stream) {
      return <Camera
        stream={mediaStore.stream}
        snapshotInterval={500}
        onSnapshot={this.onSnapshot}
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

    return null;
  }
}

export default CameraController;

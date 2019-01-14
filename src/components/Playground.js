import React from 'react';
import { inject, observer } from 'mobx-react';

import ChipCard from '../shared/chip-card/ChipCard';
import Camera from '../shared/camera/Camera';
import { Twemoji } from 'react-emoji-render';

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
    this.props.modelStore.predict(img);
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
        <ChipCard top show type="block"
          avatar={<Twemoji className="avatar__emoji" svg text="😭" />}
          title="Oh no..."
          text="Your device not support webrtc camera :("
        />
      )
    }
  }


  render() {
    const { mediaStore, modelStore } = this.props;

    return (
      <div className='Playground'>
        {this.cameraController()}

        <ChipCard top show textFit type="mini">
          Zoom the camera onto the flower to scan it
        </ChipCard>

        <ChipCard top show type="block"
          avatar={<img src={this.state.snapshot} />}
          title="Searching..."
          text="Trying to find a match with the picture."
        />
        <ChipCard bottom={true} show type="block"
          header="Главный штаб эрмитажа"
        />
        <ChipCard bottom show type="block">
          <Twemoji className="rebus" svg text="🐶🐶👨🐶🐶" />
        </ChipCard>
      </div>
    )
  }
}

export default Playground;

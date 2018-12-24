import React from 'react';
import './Camera.css';

class Camera extends React.PureComponent {
  videoRef = React.createRef();

  handleVideo = (stream) => {
    this.videoRef.current.srcObject = stream;
    this.videoRef.width = 224;
    this.vodeoRef.height = 224;
    this.props.onInit && this.props.onInit(stream);
  }

  videoError = (err) => {
    this.props.onError && this.props.onError(err);
  }

  componentDidMount() {
    let constraints = {
      audio: false,
      video: { facingMode: 'environment' }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.handleVideo)
      .catch(this.videoError)
  }

  render() {
    return (
      <div className="camera">
        <video
          style={{
            height: window.innerHeight,
            marginLeft: -window.innerWidth/2
          }}
          ref={this.videoRef}
          playsInline
          autoPlay
          muted
        />
      </div>
    );
  }
}

export default Camera;

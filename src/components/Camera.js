import React from 'react';
import './Camera.module.css';

class Camera extends React.PureComponent {
  videoRef = React.createRef();

  handleVideo = (stream) => {
    this.videoRef.current.srcObject = stream;
    this.props.onInit && this.props.onInit(stream);
  }

  videoError = (err) => {
    this.props.onError && this.props.onError(err);
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.getUserMedia) {
      let constraints = {
        audio: false,
        video: { facingMode: 'environment' }
      };

      navigator.mediaDevices.getUserMedia(constraints)
        .then(this.handleVideo)
        .catch(this.videoError)
    }
  }

  render() {
    return (
      <div className="Camera">
        <video ref={this.videoRef} style={{ width: '100%' }} playsInline autoPlay muted />
      </div>
    );
  }
}

export default Camera;

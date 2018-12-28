import React from 'react';
import './Camera.css';

class Camera extends React.PureComponent {
  videoRef = React.createRef();

  componentDidMount() {
    this.videoRef.current.srcObject = this.props.stream;
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

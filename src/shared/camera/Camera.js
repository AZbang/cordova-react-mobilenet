import React from 'react';
import PropTypes from 'prop-types';
import './Camera.css';

class Camera extends React.PureComponent {
  canvas = document.createElement('canvas');
  ctx = this.canvas.getContext('2d');

  videoRef = null;
  timerId = null;

  componentDidUpdate() {
    clearInterval(this.timerId);
    this.initCamera();
  }

  componentDidMount() {
    this.initCamera();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getVideoSettings = () => {
    return this.props.stream.getTracks()[0].getSettings()
  }

  initCamera = () => {
    const videoSize = this.getVideoSettings();
    const w = videoSize.width;
    const h = videoSize.height;
    const size = window.innerHeight;
    const scale = size/h;
    const dx = w*scale/2-window.innerWidth/2;
    this.videoRef.style.height = size + 'px';
    this.videoRef.style.marginLeft = -dx + 'px';

    this.videoRef.srcObject = this.props.stream;
    this.canvas.width = this.props.snapshotSize;
    this.canvas.height = this.props.snapshotSize;
    this.videoRef.oncanplay = () => {
      this.timerId = setInterval(this.snapshot, this.props.snapshotInterval);
    };
  }

  snapshot = () => {
    const videoSize = this.getVideoSettings();
    const w = videoSize.width;
    const h = videoSize.height;
    const size = this.props.snapshotSize || w;

    if(w > h) {
      const scale = size/h;
      const dx = w*scale/2-size/2;
      this.ctx.drawImage(this.videoRef, -dx, 0, w*scale, size);
    } else {
      const scale = size/w;
      const dy = h*scale/2-size/2;
      this.ctx.drawImage(this.videoRef, 0, -dy, size, h*scale);
    }

    const img = document.createElement('img');
    img.src = this.canvas.toDataURL();
    this.props.onSnapshot && this.props.onSnapshot(img);
  }

  render() {
    return (
      <div className="Camera">
        <video
          ref={(node) => this.videoRef = node}
          autoPlay
          muted
        />
      </div>
    );
  }
}

Camera.defaultProps = {
  snapshotInterval: 1000,
  snapshotSize: null,
  onSnapshot: null,
}
Camera.propProps = {
  stream: PropTypes.instanceOf(MediaStream).isRequired,
  snapshotInterval: PropTypes.number,
  snapshotSize: PropTypes.number,
  onSnapshot: PropTypes.func,
}

export default Camera;

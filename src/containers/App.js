import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import Camera from '../components/Camera';
import ChipCard from '../components/ChipCard';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.getMediaStream();
    this.props.loadModel();
  }

  onStream = (img) => {

  }

  render() {
    return (
      <div className="App">
        {this.props.stream &&
          <Camera
            snapshotInterval={500}
            stream={this.props.stream}
            onSnapshot={this.onSnapshot}
          />
        }
        <ChipCard position="bottom" show={!this.props.loadingModal} size={12}>
          <h1>Onnx model is loaded!</h1>
        </ChipCard>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loadingModel: state.model.loading,
  modelType: state.model.type,
  predictData: state.model.predictData,
  stream: state.mediaStream.stream,
  streamError: state.mediaStream.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getMediaStream: actions.getMediaStream.request,
    loadModel: actions.loadModel.request,
    predictModel: actions.predictModel.request
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

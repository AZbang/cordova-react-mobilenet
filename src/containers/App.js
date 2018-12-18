import React from 'react';
import { connect } from 'react-redux';
import Camera from '../components/Camera';
import ChipCard from '../components/ChipCard';

class App extends React.PureComponent {
  onStream = (img) => {

  }

  render() {
    return (
      <div className="App">
        <Camera onStream={this.onStream}/>
        <ChipCard position="bottom">
          <h1>Классификатор сосиски!</h1>
        </ChipCard>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading
});

export default connect(mapStateToProps)(App);

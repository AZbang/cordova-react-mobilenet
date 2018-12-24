import React from 'react';
import { connect } from 'react-redux';
import Camera from '../components/Camera';
import ChipCard from '../components/ChipCard';

class App extends React.PureComponent {
  onStream = (img) => {

  }

  state = {
    mainChipShow: false
  }

  componentDidMount() {
    setTimeout(() => this.setState({mainChipShow: true}), 100);
  }

  render() {
    return (
      <div className="App">
        <Camera onStream={this.onStream}/>
        <ChipCard position="top" show={this.state.mainChipShow} size={12}>
          <h1 style={{fontFamily: "Alfa Slab One"}}>Flowers skaner</h1>
        </ChipCard>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading
});

export default connect(mapStateToProps)(App);

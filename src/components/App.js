import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Playground from './Playground';
import Result from './Result';
import Settings from './Settings';
import store from '../stores';

@inject('mediaStore', 'modelStore')
@withRouter
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.mediaStore.getMediaStream();
    this.props.modelStore.loadModel();
  }

  redirect = () => {
    return <Redirect to='/playground' />
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/playground' component={Playground} />
          <Route path='/result' component={Result} />
          <Route path='/settings' component={Settings} />
          <Route component={this.redirect}/>
        </Switch>
      </div>
    )
  }
}

export default App;

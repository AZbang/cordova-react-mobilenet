import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Playground from './Playground';
import Result from './Result';
import Settings from './Settings';

@inject('mediaStore', 'modelStore')
@withRouter
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.mediaStore.getUserMedia();
    this.props.modelStore.loadModel();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/playground" component={Playground} />
          <Route path="/result" component={Result} />
          <Route path="/settings" component={Settings} />
          <Route path="/" redirect="/playground" />
        </Switch>
      </div>
    )
  }
}

export default App;

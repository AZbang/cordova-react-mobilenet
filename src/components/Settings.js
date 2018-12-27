import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('mediaStore', 'modelStore')
@observer
class Settings extends React.Component {
  render() {
    const { mediaStore, modelStore } = this.props;

    return (
      <div className="Settings">

      </div>
    )
  }
}

export default Settings;

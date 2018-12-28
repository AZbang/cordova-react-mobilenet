import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('mediaStore', 'modelStore')
@observer
class Result extends React.Component {
  render() {
    const { mediaStore, modelStore } = this.props;

    return (
      <div className='Result'>

      </div>
    )
  }
}

export default Result;

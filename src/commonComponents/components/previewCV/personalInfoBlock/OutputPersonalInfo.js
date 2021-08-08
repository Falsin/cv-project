import React from 'react';
import CloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForPreview from '../../../additionalComponents/componentsForOuputPreviewInfo/CreateListCompForPreview';
import PhotoBlock from './compForOutputPersonalInfo/PhotoBlockComp';

class OutputPersonalInfo extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(CloneObj(this.props.parentState))
    }
  }

  render() {
    return (
      <div id='personalInformation'>

        <PhotoBlock obj={this.props.parentState.generalInfo.Avatar}/>

        <form>
          <h2>Personal information</h2>
          <CreateListCompForPreview subObj={this.props.parentState.generalInfo}/>
        </form>
      </div>
    )
  }
}

export default OutputPersonalInfo;
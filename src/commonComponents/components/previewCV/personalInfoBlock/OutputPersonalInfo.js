import React from 'react';
import CloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForPreview from '../../../additionalComponents/CreateListCompForPreview';
import PhotoBlock from './compForOutputPersonalInfo/PhotoBlockComp';

class OutputPersonalInfo extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(CloneObj(this.props.parentState))
    }
  }

  componentDidMount() {
    this.setState(CloneObj(this.props.parentState))
  }

  render() {
    return (
      <div id='personalInformation'>

        {this.state && <PhotoBlock obj={this.state.generalInfo.Avatar}/>}

        <form>
          <h2>Personal information</h2>

          {this.state && <CreateListCompForPreview obj={this.state.generalInfo}/>}
        </form>
      </div>
    )
  }
}

export default OutputPersonalInfo;
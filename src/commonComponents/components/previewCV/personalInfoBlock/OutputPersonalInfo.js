import React from 'react';
import CloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForPreview from '../../../additionalComponents/CreateListCompForPreview';
import emptyAvatar from '../../../../images/emptyAvatar.jpg'

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

class PhotoBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: emptyAvatar
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.obj !== undefined) {
      this.setState({url: this.props.obj});
    }
  }

  render() {
    return (
      <div id='photoBlock' style={{backgroundImage: `url(${this.state.url})`}}></div>
    )
  }
}

export default OutputPersonalInfo;
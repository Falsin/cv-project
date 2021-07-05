import React from 'react';
import CloneObj from '../../../additionalComponents/CloneObj';
import CreateList from './CreateListComp';

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
    console.log(this.state)
    return (
      <form>
        <h2>Personal information</h2>

        {this.state && <CreateList obj={this.state.generalInfo}/>}
      </form>
    )
  }
}

export default OutputPersonalInfo;
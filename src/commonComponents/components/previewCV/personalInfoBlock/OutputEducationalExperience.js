import React from 'react'
import CreateList from './CreateListComp';
import CloneObj from '../../../additionalComponents/CloneObj';

class OutputEducationalExperience extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState(CloneObj(this.props.parentState))
    }
  }

  componentDidMount() {
    this.setState(CloneObj(this.props.parentState))
  }

  render() {
    return (
      
      <div>{this.state && <CreateList obj={this.state.educationalExperience}/>}</div>
    )
  }
} 

export default OutputEducationalExperience;
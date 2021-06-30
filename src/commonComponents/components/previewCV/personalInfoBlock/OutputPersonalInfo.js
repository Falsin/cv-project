import React from 'react';
import CreateList from './CreateListComp';

class OutputPersonalInfo extends React.Component {
  constructor(props) {
    super(props)

    this.returnParentScope = props.returnParentScope();
  }

  render() {
    //console.log(this.returnParentScope.state)
    return (
      <form>
        <h2>Personal information</h2>

        {this.returnParentScope.state && 
        <CreateList obj={this.returnParentScope.state.generalInfo}/>}
      </form>
    )
  }
}

export default OutputPersonalInfo;
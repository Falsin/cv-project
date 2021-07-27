import React from 'react';
import CreateListCompForTemplate from '../../../../additionalComponents/CreateListCompForTemplate';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
    this.personalInfo = this.parentScope.state.generalInfo;
  }

  render() {
    let duplicateState = this.parentScope.state;
    
    return (
      <div>
        <h2>Personal information</h2>
        <CreateListCompForTemplate subObj={duplicateState.generalInfo} obj={duplicateState} scope={this.parentScope}/>
      </div>
    )
  }
}

export default InfoBox
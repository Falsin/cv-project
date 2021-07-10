import React from 'react'
import CloneObj from '../../../additionalComponents/CloneObj';
import TemplateEducExp from './compForOutputEducExp/TemplateEducExp';
import CollectionEducExp from './compForOutputEducExp/CollectionEducExp';

class OutputEducationalExperience extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState(CloneObj(this.props.parentState.educExp))
    }
  }

  componentDidMount() {
    this.setState(CloneObj(this.props.parentState.educExp))
  }

  render() {
    let collectionEducExp;
    let templateEducExp;
    let renderComp;

    if (this.state) {
      collectionEducExp = this.state.educationalExperienceCollection;
      templateEducExp = this.state.educationalExperience;
      renderComp = (collectionEducExp.length) 
                ? <CollectionEducExp array={collectionEducExp}/> 
                : <TemplateEducExp obj={templateEducExp.info}/>;
    }

    return (
      <div id='educationalExperience'>
        <h2>Educational experience</h2>

        {renderComp}
      </div>
    )
  }
} 

export default OutputEducationalExperience;
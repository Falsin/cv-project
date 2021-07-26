import React from 'react'
import TemplateEducExp from './compForOutputEducExp/TemplateEducExp';
import CollectionEducExp from './compForOutputEducExp/CollectionEducExp';

class OutputEducationalExperience extends React.Component {
  render() {
    let obj = this.props.obj,
        collectionEducExp = obj.educationalExperienceCollection,
        templateEducExp = obj.educationalExperience,
        renderComp = (collectionEducExp.length) 
                    ? <CollectionEducExp array={collectionEducExp}/> 
                    : <TemplateEducExp obj={templateEducExp}/>; 

    return (
      <div id='educationalExperience'>
        <h2>Educational experience</h2>

        {renderComp}
      </div>
    )
  }
} 

export default OutputEducationalExperience;
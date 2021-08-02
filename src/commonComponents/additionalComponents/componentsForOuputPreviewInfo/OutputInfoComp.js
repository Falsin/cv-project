import React from 'react';
import CreateCollectionComp from './CreateCollectionComp';
import CreateListCompForPreview from './CreateListCompForPreview';

class OutputInfoComp extends React.Component {
  constructor(props) {
    super(props);

    this.readonly = true;
  }

  render() {
    let array = Object.entries(this.props.obj),
        collectionPractic = array[1][1],
        templatePractic = array[0][1],
        renderComp = (collectionPractic.length) 
                ? <CreateCollectionComp array={collectionPractic}/> 
                : <CreateListCompForPreview obj={templatePractic}/>;     
    
    return (
      <div>
        <h2>{this.props.headline}</h2>

        {renderComp}
      </div>
    )
  }
}

export default OutputInfoComp;
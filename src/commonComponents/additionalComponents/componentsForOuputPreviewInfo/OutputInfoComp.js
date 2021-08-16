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
        collection = array[1][1],
        template = array[0][1],
        renderComp = (collection.length) 
                ? <CreateCollectionComp array={collection}/> 
                : <CreateListCompForPreview subObj={template}/>;     
    
    return (
      <section>
        <h2>{this.props.headline}</h2>

        {renderComp}
      </section>
    )
  }
}

export default OutputInfoComp;
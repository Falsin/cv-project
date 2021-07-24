import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'
import CloneObj from '../../../additionalComponents/CloneObj';
import clickHandler  from '../../../additionalComponents/ClickHandler';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: {
          value: '',
          type: 'text'
        },
        Email: {
          value: '',
          type: 'text'
        },
        Phone: {
          value: '',
          type: 'text'
        },
        Country: {
          value: '',
          type: 'text'
        },
      }
    }
    
    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  returnParentScope() {
    return this;
  }

  componentDidMount() {
    this.parentScope.setState(CloneObj(this.state));
  }
  
  render() {
    return(
      <section>
        <form>
          <div className='infoBlocks'>
            <InfoBox parentScope={this.returnParentScope.bind(this)}/>

            <PhotoComp parentScope={this.returnParentScope.bind(this)} />
          </div>

          <ButtonsSection btns={[
            {
              value: 'Add information', 
              func: clickHandler.bind(null, this.state, this.commonParentScope)
            }
          ]} />
        </form>

      </section>
    )
  }
}

export default GeneralInfo;
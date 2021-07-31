import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { input, countryComp } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';
import { sendSingleInformation } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import cloneObj from '../../../additionalComponents/CloneObj';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: {
          value: '',
          inputElem: input('text'),
        },
        Email: {
          value: '',
          inputElem: input('text'),
        },
        Phone: {
          value: '',
          inputElem: input('text'),
        },
        Country: {
          value: '',
          inputElem: countryComp('text'),
        },
      }
    }
    
    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  componentDidMount() {
    this.parentScope.setState(this.state);
  }

/*   componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
  } */
  
  render() {
    return(
      <section>
        <form>
          <div className='infoBlocks'>
            <InfoBox parentScope={this}/>

            <PhotoComp parentScope={this} />
          </div>

          <ButtonsSection btns={[
            {
              value: 'Add information', 
              func: sendSingleInformation.bind(this, this.state, 'generalInfo')
            }
          ]} />
        </form>

      </section>
    )
  }
}

export default GeneralInfo;
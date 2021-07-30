import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'
import CloneObj from '../../../additionalComponents/CloneObj';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { Input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';
import CountryComp from './commonInfoComponents/ComponentsForInfoBox/CountryComp';
import { sendSingleInformation } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import cloneObj from '../../../additionalComponents/CloneObj';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: {
          value: '',
          returnInputElem(childObj) {
            return <Input type='text' obj={childObj} parentScope={this}/>
          }
        },
        Email: {
          value: '',
          returnInputElem(childObj) {
            return <Input type='text' obj={childObj} parentScope={this}/>
          }
        },
        Phone: {
          value: '',
          returnInputElem(childObj) {
            return <Input type='text' obj={childObj} parentScope={this}/>
          }
        },
        Country: {
          value: '',
          returnInputElem(childObj) {
            return <CountryComp type='text' obj={childObj} parentScope={this}/>
          }
        },
      }
    }
    
    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  componentDidMount() {
    this.parentScope.setState(CloneObj(this.state));
  }
  
  render() {
    let duplicateState = cloneObj(this.state)
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
              func: sendSingleInformation.bind(this, duplicateState, 'generalInfo')
            }
          ]} />
        </form>

      </section>
    )
  }
}

export default GeneralInfo;
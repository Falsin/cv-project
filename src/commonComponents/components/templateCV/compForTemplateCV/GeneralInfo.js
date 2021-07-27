import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'
import CloneObj from '../../../additionalComponents/CloneObj';
import clickHandler  from '../../../additionalComponents/ClickHandler';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { Input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';
import CountryComp from './commonInfoComponents/ComponentsForInfoBox/CountryComp';

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='text' obj={childObj} id={id} parentScope={this}/>
          }
        },
        Email: {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='text' obj={childObj} id={id} parentScope={this}/>
          }
        },
        Phone: {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='text' obj={childObj} id={id} parentScope={this}/>
          }
        },
        Country: {
          value: '',
          returnInputElem(childObj, id) {
            return <CountryComp type='text' obj={childObj} id={id} parentScope={this}/>
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
              func: clickHandler.bind(null, this.state, this.commonParentScope)
            }
          ]} />
        </form>

      </section>
    )
  }
}

export default GeneralInfo;
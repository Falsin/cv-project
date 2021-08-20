import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import createBtnsAttr from '../../../additionalComponents/componentsForButtonSection/createBtnsAttr';
import {input, countryComp} from '../../../additionalComponents/ComponentsForInputsElements/funcForCreatingInputsElements'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        Email: {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        Phone: {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        Country: {
          value: '',
          inputElem: countryComp.bind(this, 'text'),
        },
        
        isValid: true,
      }
    }
    
    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  componentDidMount() {
    this.parentScope.setState(this.state);
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevState !== this.state;
  }
  
  render() {
    const btns = createBtnsAttr.call(this, 'generalInfo')

    return(
      <section>
        <form>
          <div className='infoBlocks'>
            <InfoBox parentScope={this}/>

            <PhotoComp parentScope={this} />
          </div>

          <ButtonsSection btns={btns} />
        </form>

      </section>
    )
  }
}

export default GeneralInfo;
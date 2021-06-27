import React from 'react';
import ContactInfo from './ComponentsForInfoBox/ContactInfo';
import CountryComp from './ComponentsForInfoBox/CountryComp';

class InfoBox extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope();
    this.personalInfo = this.parentScope.state.generalInfo;
  }

  render() {
    return (
      <div>
        {Object.keys(this.personalInfo).map((elem, id) => {
          if (elem !== 'Country') {
            return <ContactInfo key={id} nameElem={elem} parentScope={this.parentScope}/>
          }
          return <CountryComp key={id} nameElem={elem} parentScope={this.parentScope}/>
        })}     
      </div>
    )
  }
}

export default InfoBox
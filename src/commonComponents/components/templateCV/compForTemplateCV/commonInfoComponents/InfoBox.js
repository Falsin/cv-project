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
        <h2>Personal information</h2>
        <ul>
        {Object.entries(this.personalInfo).map((elem, id) => {
          if (elem[0] !== 'Country') {
            return <ContactInfo key={id} nameElem={elem[0]} parentScope={this.parentScope}/>
          }
          return <CountryComp key={id} nameElem={elem[0]} parentScope={this.parentScope}/>
        })}     
      </ul>
      </div>
    )
  }
}

export default InfoBox
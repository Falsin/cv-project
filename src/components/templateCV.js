import React from 'react';

class TemplateCV extends React.Component {
  render() {
    return (
      <section>
        <div id='generalInfo'>
          <div>
            <label>Name<input></input></label>
            <label>E-mail<input></input></label>
            <label>Phone<input></input></label>
            <label>Country<input></input></label>
            
          </div>
          <div className='photo'>Hello!</div>
        </div>
      </section>
    )
  }
}

export default TemplateCV;
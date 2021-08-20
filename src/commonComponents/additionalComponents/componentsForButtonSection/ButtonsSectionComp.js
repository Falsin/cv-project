import React from 'react';
import Button from './ButtonComp';

class ButtonsSection extends React.Component {
  render() {
    return (
      <div className='buttons'>
        {this.props.btns.map((elem, id) => <Button elem={elem} key={id}/>)}
      </div>
    )
  }
}

export default ButtonsSection
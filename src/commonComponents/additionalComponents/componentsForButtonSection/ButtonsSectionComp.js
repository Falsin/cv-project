import React from 'react';
import Button from './ButtonComp';

class ButtonsSection extends React.Component {
  render() {
    return (
      <div>
        {this.props.btns.map((elem, id) => {
          return <Button type='button' value={elem.value} func={elem.func} key={id}/>
        })}
      </div>
    )
  }
}

export default ButtonsSection
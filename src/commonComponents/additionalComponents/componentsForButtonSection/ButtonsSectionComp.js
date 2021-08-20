import React from 'react';
import Button from './ButtonComp';

class ButtonsSection extends React.Component {
  render() {
    return (
      <div className={'buttons'}>
        {this.props.btns.map((elem, id) => {
          return <Button class={elem.class} value={elem.value} func={elem.func} key={id}/>
        })}
      </div>
    )
  }
}

export default ButtonsSection
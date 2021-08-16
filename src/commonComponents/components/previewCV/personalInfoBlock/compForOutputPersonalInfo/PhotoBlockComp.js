import React from 'react';
import emptyAvatar from '../../../../../images/emptyAvatar.jpg'

class PhotoBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: emptyAvatar
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.props.obj !== undefined) {
      this.setState({url: this.props.obj});
    }
  }

  render() {
    return (
      <div id='photoBlock' 
        style={{
          backgroundImage: `linear-gradient(rgba(68, 68, 68, 0.2), rgba(68, 68, 68, 0.2)), url(${this.state.url})`
        }} 
      />
    )
  }
}

export default PhotoBlock;
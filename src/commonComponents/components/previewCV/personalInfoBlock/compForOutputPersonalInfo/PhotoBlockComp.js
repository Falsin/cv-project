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
      <div id='photoBlock' style={{backgroundImage: `url(${this.state.url})`}}></div>
    )
  }
}

export default PhotoBlock;
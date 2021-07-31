import React from 'react';
import cloneObj from '../../../../additionalComponents/CloneObj';

class PhotoComp extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = props.parentScope;
    this.url = undefined;
  }

  onFileSelected(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile !== undefined) {
      const reader = new FileReader();
      const elemTag = document.querySelector('.photo');

      reader.onload = (e) => {  
        this.url = e.target.result;
        elemTag.style.backgroundImage = `url(${this.url})`;

        this.addPropertyInState()
      }

      reader.readAsDataURL(selectedFile);
    }
  }

  componentDidMount() {
    this.addPropertyInState()
  }

  addPropertyInState() {
    /* let duplicateObj = cloneObj(this.parentScope.state);
    duplicateObj.generalInfo.Avatar = this.url;

    this.parentScope.setState(duplicateObj); */
    console.log(this.parentScope.state)
    let clone = this.parentScope.state.generalInfo;
    clone.Avatar = this.url;
    this.parentScope.setState({
      generalInfo: clone
    });
  }

  render() {
    return (
      <div className='photo'>
          <label><input type='file' onChange={this.onFileSelected.bind(this)}></input></label>
      </div>
    )
  }
}

export default PhotoComp;
import React from 'react'

class PhotoComp extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = props.parentScope();
  }

  onFileSelected(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile !== undefined) {
      const reader = new FileReader();
      const elemTag = document.querySelector('.photo');

      reader.onload = (e) => {
        elemTag.style.backgroundImage = `url(${e.target.result})`;
        this.parentScope.setState({
          generalInfo: {
            avatar: this.url
          }
        })
      }

      reader.readAsDataURL(selectedFile);
    }
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
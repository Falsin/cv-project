import cloneObj from "./CloneObj";
import clickHandler from "./ClickHandler";

function addInfo() {
  let array = Object.values(this.state.educationalExperience);
  let check = array.every(elem => elem.value !== '')

  if (check) {
    let newObj = cloneObj(this.state.educationalExperience);
    let newArray = this.state.educationalExperienceCollection.slice(0);
    newArray.push(newObj)

    this.setState({
      educationalExperienceCollection: newArray,
      educationalExperience: cloneObj(this.defaultState),
    })
  }    
}

function sendInfo(duplicateState) {
  let array = Object.values(this.state.educationalExperience);
  let check = array.every(elem => elem.value !== '');

  let checkСondition = this.state.educationalExperienceCollection.find((elem) => {
    return elem.isValid === false;
  })

  if (check && !checkСondition) {
    duplicateState.educationalExperienceCollection.push(duplicateState.educationalExperience);
    new Promise(res => {
      this.setState(duplicateState);
      res(this);
    })
    .then(response => {
      let subObj = {
        educExp: response.state,
      }

      clickHandler(subObj, response.commonParentScope);
      return response;
    })
    .then(response => {
      response.setState({educationalExperience: cloneObj(response.defaultState)})
    })
  }
}

export {addInfo, sendInfo};
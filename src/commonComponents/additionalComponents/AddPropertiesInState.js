import cloneObj from "./CloneObj";

function addPropertiesInState(e, propertyName, validVal) {
  let cloneObject = cloneObj(this.state[propertyName]);
  cloneObject[e.target.id].value = e.target.value;
  this.setState({[propertyName]: cloneObject})
}

export default addPropertiesInState;
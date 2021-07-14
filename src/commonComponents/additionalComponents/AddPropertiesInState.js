function addPropertiesInState(e, subObj) {
  subObj.value = e.target.value;
  return this;
}

export default addPropertiesInState;
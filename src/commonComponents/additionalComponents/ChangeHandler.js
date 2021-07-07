import addPropertiesInState from "./AddPropertiesInState";

function changeHandler(e, propertyName) {
  if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
    e.target.classList.add('active');
  } else if (!e.target.value.length) {
    e.target.classList.remove('active');
  }
  
  addPropertiesInState.call(this, e, propertyName)
}

export default changeHandler;
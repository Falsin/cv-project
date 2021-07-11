import addPropertiesInState from "./AddPropertiesInState";

function changeHandler(e, subObj) {
  if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
    e.target.classList.add('active');
  } else if (!e.target.value.length) {
    e.target.classList.remove('active');
  }

  return addPropertiesInState.call(this, e, subObj)
}

export default changeHandler;
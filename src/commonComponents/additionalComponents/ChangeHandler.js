import addPropertiesInState from "./AddPropertiesInState";

function changeHandler(e, propertyName) {
  if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
    e.target.classList.add('active');
  } else if (!e.target.value.length) {
    e.target.classList.remove('active');
  }

  addPropertiesInState.call(this, e, propertyName)
  
/*   if (id) {
    changeObj.call(this, e, propertyName, id)
  } else {
    addPropertiesInState.call(this, e, propertyName, id)
  } */
}

/* function changeObj(e, propertyName, id) {
  for (const key in obj) {
    if (typeof key !== 'object') {
      if (key === e.target.id) {
        obj[key] = e.target.value;
        console.log('work')
      }
    } else {
      changeObj(obj[key], e)
    }
  }
} */

/* 
function changeObj(obj, e) {
  for (const key in obj) {
    if (typeof key !== 'object') {
      if (key === e.target.id) {
        obj[key] = e.target.value;
        console.log('work')
      }
    } else {
      changeObj(obj[key], e)
    }
  }
}


function addPropertiesInState(e, propertyName) {
  let cloneObject = cloneObj(this.state[propertyName]);
  cloneObject[e.target.id].value = e.target.value;
  this.setState({[propertyName]: cloneObject});
} */

export default changeHandler;
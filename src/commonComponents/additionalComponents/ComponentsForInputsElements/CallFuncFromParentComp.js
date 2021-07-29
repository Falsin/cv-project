function callFuncFromParentComp(e) {
  let indexStr = this.props.id;
  console.log(indexStr)
  //console.log(typeof indexStr)
  let EndId = indexStr.indexOf(':');
  console.log(EndId)
  console.log(indexStr.slice(0, EndId))



  let propObj = {
    obj: this.parentScope.props.obj,
    e: e,
    childObj: this.props.obj[1],
    id: +indexStr.slice(0, EndId),
    subObj: this.parentScope.props.subObj,
  }

  this.parentScope.blur(propObj);
}

export default callFuncFromParentComp;
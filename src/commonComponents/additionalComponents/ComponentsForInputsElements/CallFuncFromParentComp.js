function callFuncFromParentComp(e) {
  let propObj = {
    obj: this.parentScope.props.obj,
    e: e,
    childObj: this.props.obj[1],
    id: this.props.id,
    subObj: this.parentScope.props.subObj,
  }

  this.parentScope.blur(propObj);
}

export default callFuncFromParentComp;
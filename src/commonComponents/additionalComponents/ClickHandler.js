import CloneObj from "./CloneObj";

function clickHandler(propertyName, scope) {
  let prevScopeState = CloneObj(scope.state);
  console.log(prevScopeState)
  prevScopeState[propertyName] = this.state[propertyName];
  console.log(prevScopeState)
  scope.setState(prevScopeState);
}

export default clickHandler;
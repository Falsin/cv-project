import CloneObj from "./CloneObj";

function clickHandler(propertyName, scope) {
  let prevScopeState = CloneObj(scope.state);
  prevScopeState[propertyName] = this.state[propertyName];
  scope.setState(prevScopeState);
}

export default clickHandler;
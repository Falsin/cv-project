function clickHandler(propertyName, scope) {
  scope.setState(
    Object.assign({}, this.parentScope.state, {[propertyName]: this.state[propertyName]})
  )
}

export default clickHandler;
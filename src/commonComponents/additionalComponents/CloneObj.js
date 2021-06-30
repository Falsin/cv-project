function cloneObj(targetObj, sourceObj) {
  let newObj = targetObj;
  for (const key in sourceObj) {
    if (typeof sourceObj[key] !== 'object') {
      newObj[key] = sourceObj[key];
    } else {
      newObj[key] = {};
      newObj[key] = Object.create(Object.getPrototypeOf(sourceObj[key]), {});
      cloneObj(newObj[key], sourceObj[key])
    }
  }
  return newObj;
}

export default cloneObj
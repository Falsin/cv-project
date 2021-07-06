function cloneObj(sourceObj) {
  let newObj = Object.create(Object.getPrototypeOf(sourceObj));

  for (const key in sourceObj) {
    if (typeof sourceObj[key] !== 'object') {
      newObj[key] = sourceObj[key];
    } else {
      newObj[key] = cloneObj(sourceObj[key]);
    }
  }
  return newObj;
}

export default cloneObj
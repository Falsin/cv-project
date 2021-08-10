function cloneObj(sourceObj) {
  let newObj = {};
  
  for (const key in sourceObj) {
    if (Array.isArray(sourceObj[key])) {
      newObj[key] = [];
      sourceObj[key].forEach(elem => newObj[key].push(cloneObj(elem)));

    } else if (typeof sourceObj[key] !== 'object') {
      newObj[key] = sourceObj[key];
    } else {
      newObj[key] = cloneObj(sourceObj[key]);
    }
  }
  return newObj;
}

export default cloneObj
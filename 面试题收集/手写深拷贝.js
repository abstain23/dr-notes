function deepClone(obj, map = new WeakMap() ) {
  if(obj === null) return obj
  if(obj instanceof RegExp) return new RegExp(obj)
  if(obj instanceof Date) return new Date(obj)
  if(typeof obj !== 'object') return obj
  if(map.has(obj)) return map.get(obj)
  const newObj = new obj.constructor()
  map.set(obj, newObj)
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
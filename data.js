const obj = {}

function transformData(key, value) {
  const num = key.replace(/[A-Z]/, '')
  if (!obj[num]) {
    obj[num] = []
  }
  obj[num].push(value)
}

console.log(obj, 96);

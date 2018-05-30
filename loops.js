function forLoop(ary) {
  var array = ary
  for (let i = 0; i < 25; i++) {
  var s = i === 1 ? `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  array.push(s)
  }
}
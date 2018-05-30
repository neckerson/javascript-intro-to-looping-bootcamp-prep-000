function forLoop(ary) {
  var array = [...ary];
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
}


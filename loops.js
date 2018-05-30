function forLoop(ary) {
  var array = [...ary];
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop`);
    } else {
      array.push(`I am ${i} strange loops`);
    }
  }
        console.log(array)
}

forLoop([])


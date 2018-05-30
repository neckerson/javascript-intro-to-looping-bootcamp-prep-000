function forLoop(ary) {
  var array = [...ary];
  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    /*if (i === 1) {
      array.push(`I am ${i} strange loop`);
    } else {
      array.push(`I am ${i} strange loops`);
    }*/
  }
        console.log(array)
}

forLoop([])


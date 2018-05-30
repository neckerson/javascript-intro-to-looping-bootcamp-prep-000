function forLoop(array) {
  //var array = [...array];
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array
}


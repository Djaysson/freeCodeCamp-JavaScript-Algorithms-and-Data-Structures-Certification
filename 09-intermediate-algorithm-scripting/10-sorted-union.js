function uniteUnique(...arrays) {

  const flatArray = [].concat(...arrays);


  return [...new Set(flatArray)];
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
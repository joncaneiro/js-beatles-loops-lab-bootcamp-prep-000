// add solution here
function theBeatlesPlay(musicians, instruments) {
  
  let arr = [];
  
  for (let i = 0; i < musicians.length; i++ ) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr
}



function johnLennonFacts(facts) {
  
  let newFacts = [];
  var i = 0
  
  while(newFacts < facts.length) {
    newFacts.push(`${facts} + !!!`)
  }
  return newFacts
}
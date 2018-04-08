function theBeatlesPlay(musicians,instruments){
  var bandLength = musicians.length;
  var roles = [];
  for (i = 0; i<bandLength;i++){
    roles[i] = musicians[i] + "plays" + instruments[i];
  }
  return roles;
}

function johnLennonFacts(facts){
  var factsLength = facts.length;
  i = 0;
  while (i<factsLength){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (num){
  var resultArray = [];
  do 
}
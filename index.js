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
  for (i=0;i<factsLength;i++){
    facts[i] += "!!!";
  }
  return facts;
}
// add solution here
function theBeatlesPlay(musicians, instruments){
  var output = [];
  
  
  for(var counter = 0; counter < musicians.length; counter++){
    output[counter] = musicians[counter] + " plays " + instruments[counter];
  }
  
  return output;
}
function johnLennonFacts(johnlemon){
  var counter = 0
  while(counter < johnlemon.length){
    johnlemon[counter] = johnlemon[counter] + "!!!"
    counter ++
  }
  return johnlemon
}

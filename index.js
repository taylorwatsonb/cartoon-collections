function dwarfRollCall(dwarves) {
var newLine =[]
  for (var i = 0; i < dwarves.length; i++){
     newLine.push(`${i+1}. ${dwarves[i]} `)
  }
   return newLine.join("")
 }

function summonCaptainPlanet(planeteerCalls){
   for(var i = 0 ; i < planeteerCalls.length  ; i++){
    var call = planeteerCalls[i].toUpperCase()+"!";
    planeteerCalls[i] = call;
  }
  return planeteerCalls;
  }

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
    return true;
     }
    }
    return false; 
}


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];

  for(var i = 0 ; i < foods.length ; i++){

    for(var k = 0 ; k < cheese.length ; k++){
      if(cheese[k] == foods[i]){
        return cheese[k];
      }
    }
  }
 return "no cheese";
}
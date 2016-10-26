var vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelys = ['a', 'e', 'i', 'o', 'u', 'y'];
var vowelLocations = [];
var firstVowel;

var sentenceHandler = function(pigSentence) {
  var pigArray = pigSentence.split(" ");
  tempArray = [];

  for (index = 0; index < pigArray.length; index++) {
    var eachWord = pigTranslator(pigArray[index]);
    tempArray.push(eachWord);
  }
  var newPigSentence = tempArray.join(" ");
  return newPigSentence;
}

var pigTranslator = function(pigWord){
  var splitPigSentence = pigWord.toLowerCase().split("");
  var isNumber = pigWord.match(/[^a-z\s]/g);
  if(isNumber){
    alert('please enter only letters');
    return false;
  }
  else if (vowels.indexOf(splitPigSentence[0]) > -1) {
    splitPigSentence.push('ay');
    var newPigSentence = splitPigSentence.join("");
    return newPigSentence;
  }
  else if (splitPigSentence[0] === 'q' && splitPigSentence[1] === 'u'){
    var quArray = splitPigSentence.splice(0, 2);
    quArray.push('ay');
    var quSentence = quArray.join("");
    splitPigSentence.push(quSentence);
    newPigSentence = splitPigSentence.join("");
    return newPigSentence;
  }
  for(var index = 0; index < splitPigSentence.length; index++){
    if (vowelys.indexOf(splitPigSentence[index]) > -1){
        vowelLocations.push(index);
      }
  }
  firstVowel = vowelLocations[0];
  var tempArray = splitPigSentence.splice(0, firstVowel);
  tempArray.push('ay');
  var tempSentence = tempArray.join("");
  splitPigSentence.push(tempSentence);
  newPigSentence = splitPigSentence.join("");
  return newPigSentence;
}


$(document).ready(function(){
  $("#pig-latin").submit(function(event){

    var userInput = $("#user-input").val();
    var newSentence = sentenceHandler(userInput);
    $('#pig-sentence').text(newSentence);
    $("#output").show();
    event.preventDefault();
  });
});

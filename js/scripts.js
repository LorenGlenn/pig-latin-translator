var vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelys = ['a', 'e', 'i', 'o', 'u', 'y'];


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

var alphaCheck = function(pigWord){
  var isNumber = pigWord.match(/[^a-z\s]/g);
  if(isNumber){
    alert('please');
    alert('only letters...');
    return false;
  }
  else{
    return true;
  }
}

var firstVowelCheck = function(splitPigSentence){
  if (vowels.indexOf(splitPigSentence[0]) > -1) {
    splitPigSentence.push('ay');
    var newPigSentence = splitPigSentence.join("");
    return newPigSentence;
  }
  else {
    return false;
  }
}

var quCheck = function(splitPigSentence){
  if (splitPigSentence[0] === 'q' && splitPigSentence[1] === 'u'){
    var quArray = splitPigSentence.splice(0, 2);
    quArray.push('ay');
    var quSentence = quArray.join("");
    splitPigSentence.push(quSentence);
    newPigSentence = splitPigSentence.join("");
    return newPigSentence;
  }
  else {
    return false;
  }
}

var consonantCheck = function(splitPigSentence){

  var vowelLocations = [];
  var firstVowel;

  for(var index = 0; index < splitPigSentence.length; index++){
    if (vowelys.indexOf(splitPigSentence[index]) > -1){
        vowelLocations.push(index);
      }
  }
  firstVowel = vowelLocations[0];
  if(firstVowel == 0){
    firstVowel++;
  }
  var tempArray = splitPigSentence.splice(0, firstVowel);
  tempArray.push('ay');
  var tempSentence = tempArray.join("");
  splitPigSentence.push(tempSentence);
  newPigSentence = splitPigSentence.join("");
  return newPigSentence;
}

var pigTranslator = function(pigWord){

  var isAlpha = alphaCheck(pigWord);
  var splitPigSentence = pigWord.split("");
  var vowelTest = firstVowelCheck(splitPigSentence);
  var quTest = quCheck(splitPigSentence);
  var consonantTest = consonantCheck(splitPigSentence);

  if(!isAlpha){
    return false;
  }
  else if(vowelTest){
    return vowelTest;
  }
  else if(quTest){
    return quTest;
  }
  return consonantTest;
}


$(document).ready(function(){
  $("#pig-latin").submit(function(event){

    var userInput = $("#user-input").val().toLowerCase();
    var newSentence = sentenceHandler(userInput);
    $('#pig-sentence').text(newSentence);
    $("#output").show();
    $("#before-img").hide();
    $("#after-img").show();
    event.preventDefault();
  });
});

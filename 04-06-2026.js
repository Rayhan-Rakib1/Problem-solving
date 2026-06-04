// Capitalize the first letter of a string
function capitalize (sentence){
   return sentence.split('. ').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('.')

}

const text = "i am rayhan rakib . i am a full stack developer . i am good as backend technology"
console.log(capitalize(text));

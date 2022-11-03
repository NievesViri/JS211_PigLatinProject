const output = document.getElementById("output");
const input = document.getElementById("word");
const pigLatin = () => {
  // Your code herev
  console.log(input.value);
  input.value.toLowerCase().trim();

  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";
  if (vowels.indexOf(input.value[0]) > -1) {
    newStr = input.value + "yay";
    return newStr;
  } else {
    let firstMatch = input.value.match(/[aeiou]/g) || 0;

    let vowel = input.value.indexOf(firstMatch[0]);
    newStr =
      input.value.substring(vowel) + input.value.substring(0, vowel) + "ay";
    console.log(newStr);
    output.innerHTML = newStr;
    return newStr;
  }
};

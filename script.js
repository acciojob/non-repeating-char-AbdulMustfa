function firstNonRepeatedChar() {
  const inputStr = prompt("Enter a string:");

  const freq = {};
  for (let char of inputStr) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of inputStr) {
    if (freq[char] === 1) {
      
      alert(`The first non-repeated character is ${char}.`);
      return char;
    }
  }


  alert("There is no non-repeated character in the string.");
  return null;
}

firstNonRepeatedChar();
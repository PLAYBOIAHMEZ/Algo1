function analyzeSentence(sentence) {
  // Initialize counters
  let length = 0;
  let wordCount = 1; // Start with 1 because there will always be at least one word
  let vowelCount = 0;

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Count the length of the sentence excluding the period
    if (char !== ".") {
      length++;
    }

    // Count vowels
    if ("aeiouAEIOU".includes(char)) {
      vowelCount++;
    }

    // Count words (count spaces as word separators)
    if (char === " ") {
      wordCount++;
    }
  }

  // Return the results
  return { length, wordCount, vowelCount };
}

// Test the function
const sentence = "Hello world. ";
const result = analyzeSentence(sentence);

console.log("Length of sentence:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);

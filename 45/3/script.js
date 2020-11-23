function wordCount(str) {
    const wordCount = str.split(" ")
    return wordCount.length
}

console.log(wordCount("foo"))
console.log(wordCount("Jag älskar chips"))
console.log(wordCount("God natt!"))
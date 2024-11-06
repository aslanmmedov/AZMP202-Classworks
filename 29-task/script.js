// function findWord(sentence,word) {
//     let newsentence = sentence.split(" ")
//     for (let index = 0; index < newsentence.length; index++) {
//         if(newsentence[index] === word){
//             return index;
//         }
//     }
// }
// console.log(findWord("aslan memmedov zahir oglu","oglu"))






// function sentenceCapitalization(sentence) {
//     let newsentence = sentence.split(" ")
//     let word = newsentence[0];
//     for (let i = 0; i < newsentence.length; i++) {
//         if(newsentence[i].length > word.length){
//             word = newsentence[i];
//         }
//     }
//     return word;
// }

// console.log(sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."))
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")





// function sentenceCapitalization(sentence) {
//     let newsentence = sentence.split(" ")
//     let counter = 0;
//     for (let i = 0; i < newsentence.length; i++) {
//         counter++
//     }
//     return counter;
// }
// console.log(sentenceCapitalization("aslan memmedov zahir oglu aaaa"))





// function findWord(word,word2) {
//     let bool = 0;
//     word = word.toLowerCase();
//     word2 = word2.toLowerCase();
//     if(word.length === word2.length){
//         for (let index = 0; index < word.length; index++) {
//             for (let i = 0; i < word2.length; i++) {
//                 if(word[index] === word2[i]){
//                     bool += 1;
//                 }
//             }
//         }
//         if(bool = word.length){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }   
//     return false;
    
// }
// console.log(findWord("OlgUn","oGlu"))
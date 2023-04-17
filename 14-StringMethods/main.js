sampleNews = `As software developers, the natural tendency is to start developing 
applications based on your own hands-on experience and knowledge right away. However, 
overtime issues in the application arise, adaptations to changes, and new features 
happen. Since then, you gradually realize that you have put too much effort into one 
thing: modifying the application. Even when implementing a simple task, it also requires 
understanding the whole system. You can’t blame them for changes or new features since 
they are inevitable parts of software development. So, what is the main problem here? 
The obvious answer could be derived from the application’s design. Keeping the system 
design as clean and scalable as possible is one of the critical things that any 
professional developer should dedicate their time to. And that’s where SOLID design 
principles come into play. It helps developers eliminate design smells and build the 
best designs for a set of features. Although the SOLID design principles were first 
introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his 
paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also 
the author of best-selling books Clean Code, 
Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`;

// 1)
function uperText(id){
let text=id;
return text.toUpperCase();
}
console.log(uperText(sampleNews));

// 2)

// function randomText(text) {
//     let arr = text.split('.');
//         console.log(arr);
//     for(let i=0;i<arr.length;i++){
//      if(arr[i].length>3){
//         let randomElement = arr[Math.floor(Math.random() * arr.length)];
//         return randomElement;
//      }

//     }
// }
// console.log(randomText(sampleNews))

// // 3)
// function retChar(msg) {
//     let txt = [];
//     let asd=0;
//     for (let j = 0; j < msg.length; j++) {
//         if (msg[j].toUpperCase() != msg[j].toLowerCase()) {
//             sum++;
//         }
//     }
//     return asd;
// }
// console.log(retChar(sampleNews));
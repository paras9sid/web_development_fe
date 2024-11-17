// gloab / local scope


// let score = 70; //global

// if(score < 80){
//     console.log("less than 80!",score);
//     if(score > 65){
//         console.log("Inside 65 block!",score);
//     }
// }

// console.log("Inside global block!",score);

//

let score = 70; //global

if(score <= 80){
    // originally edited global variable
    score= 90; // value of global changed for everything from now on , in to out everywhere
    let score2 = 60; // local
    console.log("less than 80!",score, score2);

    if(score >= 65){
        score=59; // changed again from 90 to 59
        console.log("Inside 65 block!",score, score2);
    }
}

// console.log("Inside global block!",score, score2); // score 2 error as its local scope not global
console.log("Inside global block!",score);

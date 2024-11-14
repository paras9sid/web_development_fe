// break and continue - keyword

let ratings = [7,8,9,0,6,4,3,5];

for(let i = 0; i < ratings.length; i++){
    // console.log(ratings[i]);
    if(ratings[i]==0){
        console.log(`Rating: ${ratings[i]}- SKIP`);
        continue;
    }
    if(ratings[i]==3){
        console.log(`Rating: ${ratings[i]}- MUST WATCH!`);
        break;
    }
    
    console.log(`Rating: ${ratings[i]}`)
}

// console.log("out of the loop!");
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }

// wrapGifts(gifts);



function writeCards(snames, enames) {
    const newLetter = []
    for(let i = 0; i < snames.length; i++) {
        newLetter.push(`Thank you, ${snames[i]}, for the wonderful ${enames} gift!`);

    }
    return newLetter;
}

function countDown(nums) {
    
    while(nums >= 0) {
        console.log(nums);
        nums--;
    }
}
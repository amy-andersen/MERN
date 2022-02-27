function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

//old synchronous version
function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads"){
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );


//new asynch version with promise
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;

        while(headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads"){
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (attempts <= maxAttempts) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject(`Attempts have exceeded ${maxAttempts} flips.`);
        }
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "Now this doesn't wait for function to complete before running!" );
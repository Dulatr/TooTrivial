// A module for holding utility functions

//knuth shuffle
function shuffle(x = []) {

    if (!x) {
        return;
    }

    var currentPosition = x.length-1;
    var temp, nextPostion;
    while(currentPosition !== 0) {
        // Pick a random position
        nextPostion = Math.floor(Math.random() * currentPosition);
        
        // grab the value at current position
        temp = x[currentPosition];
        
        // swap indexes
        x[currentPosition] = x[nextPostion];

        // fill
        x[nextPostion] = temp;

        //decrement the current position
        currentPosition -= 1;
    }

    return x;
}

// Category Code Converter
// returns name of category as a string
function convertID(id) {
    if (id === undefined) {
        return;
    }
    if (id === "any") {
        return "Any Category";
    }
    if (id === 9) {
        return "General Knowledge";
    }
    if (id === 15) {
        return "Video Games";
    }
    return;
}

export {
    shuffle,
    convertID
}
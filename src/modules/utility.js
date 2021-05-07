// A module for holding utility functions

//knuth shuffle
function shuffle(x = []){

    if (!x){
        return;
    }

    var currentPosition = x.length;
    var temp, nextPostion;
    while(currentPosition != 0){
        // Pick a random position
        nextPostion = Math.floor(Math.random() * currentPosition);
        //decrement the current position
        currentPosition -= 1;

        // grab the value at current position
        temp = x[currentPosition];
        
        // swap indexes
        x[currentPosition] = x[nextPostion];
        // fill
        x[nextPostion] = temp;

        return x;
    }
}

export {
    shuffle
}
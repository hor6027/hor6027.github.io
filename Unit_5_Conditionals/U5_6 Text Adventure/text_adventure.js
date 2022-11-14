alert("You are at gymnastics practice and need to make a series of decisions to have a successful practice.");

let warmUp_or_dontWarmUp = prompt("Do you (1) warm up for practice, or do you (2) skip warmup and go straight to events? Please type 1 for warm up or 2 for don't.");

if(warmUp_or_dontWarmUp == 1) {
    let bars_or_floor = prompt("You are nice and warmed up and are ready to begin events. Would you like to (1) start on bars, or (2) start on floor?");
    if(bars_or_floor==1){
        alert("You get a rip on bars and have to miss the rest of the rotation. Practice over...");
     } else {
            let hardFloor_or_tumbleTrack = prompt("Would you like to (1) work on your competition passes on the hard floor, or (2) have an easy floor practice and do tumbling on the tumble track?");
            if (hardFloor_or_tumbleTrack==1){
                alert("You twisted your ankle and have to go to the doctor to see if it is broken. Practice over...")
        } else {
            alert("You have a great rest of practice and get to go home happy! You win.");
        }
    }
} else {
    alert("You start events and pull a muscle because you were not properly warmed up. Practice over...");
}

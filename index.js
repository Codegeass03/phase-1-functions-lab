// Code your solution in this file!
 function distanceFromHqInBlocks(pickUpLocation){
    let hqLocation = 42;
    return pickUpLocation = Math.abs(pickUpLocation - hqLocation);
 }

 function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264;
 }

 function distanceTravelledInFeet(start, end){
 return Math.abs(start - end) * 264;
 }

 function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    } else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
            return 25;
        } else{
            return 'cannot travel that far';
        }
    }


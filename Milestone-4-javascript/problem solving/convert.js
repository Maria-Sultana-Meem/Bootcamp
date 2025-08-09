// function inchToFeet(inch){
// const feet = inch/12;
// return feet
// }

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber= parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result
}

const meemHight = inchToFeet2(62)
console.log(meemHight);


function kiloMeter(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(kiloMeter(50));

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kiloMeterToMiles(50));

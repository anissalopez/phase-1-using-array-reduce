const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((total, amount)=> total + amount)
console.log(totalBatteries)


/*const totalBatteries = batteryBatches.reduce(function(total, amount){
    return total + amount
}, 5)
console.log(totalBatteries)*/
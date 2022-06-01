function impares(m) {
    // Declare the main input data as an array
    const mainInput = m;
    let timesduplicated = {};
    let result = 0;
    // Order the array by value like [ 1,1,2,2,2,3,3,4,5,6,...]
    const tempArray = [...mainInput].sort();
    // Loop the array for count the numbers
    for (let i = 0; i < tempArray.length; i++) {
        // Check if exist key in object
        if (tempArray[i] in timesduplicated) {
            if (tempArray[i - 1] === tempArray[i]) {
                // Add 1 to the value of the object
                timesduplicated[tempArray[i]] += 1
            }
        } else {
            timesduplicated[tempArray[i]] = 1
        }
    }
    // Search for the maximun odd counter number
    let tmpResultCount = 0;
    for (const number in timesduplicated) {
        // Validate if the appearences counter is odd
        if (timesduplicated[number] % 2) {
            // Validate which is bigger
            if (timesduplicated[number] > tmpResultCount) {
                result = parseInt(number)
                tmpResultCount = timesduplicated[number]
            }
        }
    }
    return result;
}

module.exports = impares;


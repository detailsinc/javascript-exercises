let findTheOldest = function(array) {
    return oldArr = array.reduce((oldest, nextVal) => {
        let olderPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let nextPerson = getAge(nextVal.yearOfBirth, nextVal.yearOfDeath)
        return olderPerson > nextPerson ? oldest : nextVal
    });  
}

function getAge(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {yearOfDeath = new Date().getFullYear()}
    return yearOfDeath - yearOfBirth
}

module.exports = findTheOldest

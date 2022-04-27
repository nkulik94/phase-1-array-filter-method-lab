function findMatching(list, name) {
    const rightName = list.filter(function(n) {
        return n.toUpperCase() === name.toUpperCase()
    })
    return rightName
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(d) {
        for (const l in letters) {
            return d[l] === letters[l]
        }
    })
}
function matchName(drivers, name) {
    return drivers.filter(function(d) {
        for (let i = 0; i < Object.values(d).length; i++) {
        return Object.values(d)[i] === name
        }
    })
}
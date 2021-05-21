// Code your solution herel\
function findMatching(drivers, name) {
  return drivers.filter( d =>
    d.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(drivers, name) {
  return drivers.filter( d =>
    d.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
}
function matchName(drivers, name) {
  return drivers.filter( d => d.name === name)
}
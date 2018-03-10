const FERTILE_POPULATION = 3
const UNDERPOPULATION_THRESHOLD = 1
const OVERPOPULATION_THRESHOLD = 4
const STABLE_POPULATIONS = [2, 3]

class Rules {
  evaluate(population, currentStatus) {
    let resultStatus = currentStatus

    if(this.isFertile(population)) {
      resultStatus = 'alive'
    } else if(this.isHostile(population)) {
      resultStatus = 'dead'
    }

    return resultStatus
  }

  isFertile(population) {
    return population == FERTILE_POPULATION
  }

  isHostile(population) {
    return !STABLE_POPULATIONS.includes(population)
  }
}

module.exports = Rules

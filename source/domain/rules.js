class Rules {
  evaluate(aliveCount) {
    if(aliveCount == 3) {
      return 'alive'
    } else {
      return 'dead'
    }
  }
}

module.exports = Rules

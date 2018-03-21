const Tissue = require('../../source/domain/tissue')

describe('Tissue', function() {
  it('represents a conglomerate of cells', function() {
    const tissue = new TestTissue(3, 3)

    const result = tissue.exposeSize()

    expect(result).to.eq(9)
  })
})

class TestTissue extends Tissue {
  exposeSize() {
    return this.size
  }
}

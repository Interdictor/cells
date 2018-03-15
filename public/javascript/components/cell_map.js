Vue.component('cell-map', {
  template: `
    <ul class="cell-map">
      <li v-for="cell in cells">
        <div class="square gray"></div>
      </li>
    </ul>
  `,
  props: ['row_size', 'column_size'],
  computed: {
    cells: function() {
      const result = []
      for (row_index = 0; row_index < this.row_size; row_index++) {
        for (column_index = 0; column_index < this.column_size; column_index++) {
          result.push([row_index, column_index])
        }
      }
      console.log(result)
      return result
    }
  }
})

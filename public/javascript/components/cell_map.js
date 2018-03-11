Vue.component('cell-map', {
  template: `
    <ul class="cell-map">
      <li v-for="cell in cells">
        <div class="square gray"></div>
      </li>
    </ul>
  `,
  props: ['cells']
})

Vue.component('cell-map', {
  template: `
    <ul>
      <li v-for="cell in cells">
        {{ cell }}
      </li>
    </ul>
  `,
  props: ['cells']
})

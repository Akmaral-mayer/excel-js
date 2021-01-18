export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
      console.log(component.toHTML())
    })
    return $root
  }

  render() {
    // afterbegin, afterend, beforeend, beforebegin
    this.$el.append(this.getRoot())
  }
}

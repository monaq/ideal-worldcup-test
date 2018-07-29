import { $ } from '../lib/utils'

export class HandleHistory {
  constructor(stage) {
    this.prevButton = $('#prevButton')
    this.stage = stage

    this.bindEvent()
  }

  bindEvent() {
    const self = this
    this.prevButton.el.addEventListener('click', () => {
      self.stage.prevMatch()
    })
  }
}

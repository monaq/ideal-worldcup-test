import { $$, $ } from '../lib/utils'
import ui from '../template/ui'


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

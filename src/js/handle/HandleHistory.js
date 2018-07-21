import { $$, $ } from '../lib/utils'
import ui from '../template/ui'
import History from '../core/History';
import StageManager from '../core/StageManager';

export class HandleHistory {
  constructor(stage) {
    this.stage = stage
    this.prevButton = $('#prevButton')

    this.bindEvent()
  }

  bindEvent() {
    const self = this
    this.prevButton.el.addEventListener('click', () => {
      if(self.stage.step > 0){
        self.stage.prevMatch()
      }
    })
  }
}

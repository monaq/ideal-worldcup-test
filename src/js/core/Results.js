import History from './History'
import { $ } from '../lib/utils';
import ui from '../template/ui';

export class Results {
  constructor() {
    this.$resultContainer = $('#resultContainer')
    this.init()
  }

  init() {
    this.setStageName()
    this.renderItems()
    console.log(History)
  }

  setStageName() {
    const $stageName = $('#stageName')
    $stageName.el.innerHTML = '결과!'
  }

  renderItems() {
    const $resultEl = this.$resultContainer.el
    const stack = History.stack
    const winner = stack[stack.length - 1].winnerList[0]
    console.log(winner)
    ui.idealItem(winner.id, winner.title, winner.image).render($resultEl)
  }
}

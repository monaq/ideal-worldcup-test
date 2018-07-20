import History from './History'
import { $ } from '../lib/utils';
import ui from '../template/ui';

export class Results {
  constructor() {
    this.$resultTree = $('#resultTree')
    this.$champion = $('#champion')
    this.stack = History.stack
    this.init()
  }

  init() {
    this.setStageName()
    this.renderItems()
  }

  setStageName() {
    const $stageName = $('#stageName')
    $stageName.el.innerHTML = '결과!'
  }

  renderItems() {
    this.renderChampion()
    this.renderResultTree()
  }
  renderChampion() {
    const $championEl = this.$champion.el
    const winner = this.stack[this.stack.length - 1].winnerList[0]

    ui.idealItem(winner.id, winner.title, winner.image).render($championEl)
  }
  renderResultTree() {
    const winnerLists = this.stack.forEach(item => item.winnerList)
    console.log(winnerLists)
    // ui.treeItem
  }
}

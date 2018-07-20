import History from './History'
import { $, $$ } from '../lib/utils'
import ui from '../template/ui'

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
    this.stack.forEach(stage => {
      this.renderResultTree(stage)
    })
  }

  renderChampion() {
    const $championEl = this.$champion.el
    const winner = this.stack[this.stack.length - 1].winnerList[0]

    ui.idealItem(winner.id, winner.title, winner.image).render($championEl)
  }

  renderResultTree(stage) {
    const winnerList = stage.winnerList
    const winnerId = []
    const $wrapper = document.createElement('div')
    $wrapper.setAttribute('name', stage.stageName)
    $wrapper.setAttribute('class', 'stageResult')
    this.$resultTree.append($wrapper)

    winnerList.forEach(winner => {
      winnerId.push(winner.id)
      ui.treeItem(winner.id, winner.title, winner.image).render($wrapper)
    })
    this.chkIsWinner(winnerId)
  }
  chkIsWinner(winnerId) {
    const $$items = $$('.item')
    $$items.forEach(item => {
      const isExist = winnerId.indexOf(Number($(item).el.dataset.id))
      console.log(isExist)
      isExist > -1 ? $(item).addClass('win') : null
    })
  }
}

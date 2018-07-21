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

    const $container = $('#matchContainer')
    const $resultContainer = $('#resultContainer')
    $container.addClass('hide')

    $resultContainer.removeClass('hide')
    $resultContainer.addClass('show')
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
    const candidates = stage.candidates
    
    const $wrapper = document.createElement('div')
    $wrapper.setAttribute('name', stage.stageName)
    $wrapper.setAttribute('class', 'stageResult')

    this.$resultTree.append($wrapper)

    candidates.forEach(candidate => {
      ui.treeItem(candidate.id, candidate.title, candidate.image).render($wrapper)
    })
   
    this.chkIsWinner(this.filterWinner(stage))
  }
  filterWinner(stage) {
    const winnerList = stage.winnerList
    return winnerList.map((winner) => winner.id)
  }
  /**
   * 트리에서 승자만 체크
   * @param {Array} winnerIds 
   */
  chkIsWinner(winnerIds) {
    const $$items = $$('.item')
    $$items.forEach(item => {
      const itemId = Number($(item).el.dataset.id)
      winnerIds.includes(itemId) ? $(item).addClass('win') : null
    })
  }
}

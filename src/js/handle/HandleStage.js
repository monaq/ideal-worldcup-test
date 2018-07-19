import { $$, $ } from '../lib/utils'
import ui from '../template/ui'
import StageManager from '../core/StageManager';
import { Stage } from '../core/Stage';

export class HandleStage extends Stage {
  constructor(stageName, winners, eventManager) {
    super(stageName, winners, eventManager)

    this.$container = $('#matchContainer')
    this.setStageName()
    this.renderItems()
  }

  setStageName() {
    const $stageName = $('#stageName')
    $stageName.el.innerHTML = this.stageName
  }

  renderItems() {
    this.$container.el.innerHTML = ''
    this.matches[this.step].forEach(item => {
      ui.idealItem(item.id, item.title, item.image).render(this.$container.el)
    })
    this.$$target = $$('.ideal')
    this.bindEvents()
  }
 
  bindEvents() {
    const self = this
    this.$$target.forEach(el => {
      el.addEventListener('click', function() {
        const id = Number($(el).el.dataset.id)
        const winner = StageManager.getCandidate(id, self.candidates)
        self.setWinner(winner)
      })
    });

  }
  
}
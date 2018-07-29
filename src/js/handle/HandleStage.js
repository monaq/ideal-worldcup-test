import { $$, $ } from '../lib/utils'
import ui from '../template/ui'
import StageManager from '../core/StageManager'
import { Stage } from '../core/Stage'

export class HandleStage extends Stage {
  constructor(stageName, winners, eventManager) {
    super(stageName, winners, eventManager)

    this.$container = $('#matchContainer')
    this.setStageName = this.setStageName.bind(this)
  
    this.setStageName()
    this.renderItems()
  }

  setStageName() {
    const $stageName = $('#stageName')
    $stageName.el.innerHTML = this.stageName
  }

  HandleBtn() {
    if(this.step > 0) {
      $('#prevButton').removeClass('disabled')
    } else {
      $('#prevButton').addClass('disabled')
    }
  }

  renderItems() {
    this.HandleBtn()

    this.$container.el.innerHTML = ''
    if(this.matches[this.step]) {
      this.matches[this.step].forEach(item => {
        ui.idealItem(item.id, item.title, item.image).render(this.$container.el)
      })
      this.$$target = $$('.ideal')
      this.bindEvents()
    }
  }

  bindEvents() {
    const self = this
    this.$$target.forEach(el => {
      el.addEventListener('click', function() {
        self.step = StageManager.nextStep(self.step)
        const element = $(el).el
        const id = Number(element.dataset.id)
        const winner = StageManager.getCandidate(id, self.candidates)
        self.nextMatch(winner)
      })
    })
  }

}

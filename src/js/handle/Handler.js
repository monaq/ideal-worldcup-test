import ui from '../template/ui'
import { $ } from '../lib/utils'
import HandleSelector from './HandleSelector';

/**
 * Hander
 * DOM Handling 관련
 */

export class Handler {
  constructor(stage, step) {
    this.stage = stage
    this.step = step
    this.render(this.step)
  }

  render(step) {
    this.renderItems(step)
    this.setLeagueTitle()
  }

  setLeagueTitle() {
    const titleArea = $('#league').el
    titleArea.innerHTML = String(this.stage.stepName) // title을 매번 set 하는게 효율?
  }

  renderItems(step) {
    const container = $('#container')
    const match = this.stage.matches[step]

    match.map(item => { 
      ui.idealItem(item.id, item.title, item.image).render(container)
    })
    HandleSelector(this)
  }

}

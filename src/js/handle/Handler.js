import ui from '../template/ui'
import { $ } from '../lib/utils'

/**
 * Hander
 * DOM Handling 관련
 */

export class Handler {
  constructor(stage, step) {
    this.stage = stage
    this.step = step
    
    this.render()
  }

  render() {
    this.renderItems()
    this.setLeagueTitle()
  }

  setLeagueTitle() {
    const titleArea = $('#league').el
    titleArea.innerHTML = String(this.stage.stepName) // title을 매번 set 하는게 효율?
  }

  renderItems() {
    const container = $('#container')
    const match = this.stage.matches[this.step]

    match.map(item => { 
      console.log(item)
      ui.idealItem(item.id, item.title, item.image).render(container)
    })
  }

}

import { $$, $ } from '../lib/utils'
import StageManager from '../core/StageManager';
import data from '../data';

const HandleSelector = (tournament) => {
  const $target = $$('.ideal')

  $target.forEach(el => {
    el.addEventListener('click', () => {
      const target = $(el).el
      const dataId = Number(target.dataset.id)
      const winner = tournament.stage.getCandidate(dataId)

      StageManager.setWinners(dataId, winner)
    })
  })
}

export default HandleSelector

import { $$, $ } from '../lib/utils'
import { getClosest } from '../lib/utils'
import History from '../core/History'

const HandleSelector = (tournament) => {
  const $target = $$('.ideal')

  console.log($target)

  $target.forEach(el => {
    el.addEventListener('click', () => {
      const target = $(el).el
      const dataId = target.dataset.id
      console.log(tournament)
      // tournament.setWinner(dataId)
    })
  })
}

export default HandleSelector

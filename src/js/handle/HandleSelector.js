import { $$, $ } from '../lib/utils'

const HandleSelector = (tournament) => {
  const $target = $$('.ideal')

  $target.forEach(el => {
    el.addEventListener('click', () => {
      const target = $(el).el
      const dataId = Number(target.dataset.id)
      const winner = tournament.stage.getCandidate(dataId)

      tournament.Commands.setWinners(winner)
      tournament.Commands.nextMatch()

    })
  })
}

export default HandleSelector

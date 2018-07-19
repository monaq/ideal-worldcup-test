import { $$, $ } from '../lib/utils'
import ui from '../template/ui'
import StageManager from '../core/StageManager';

const HandleStage = stage => {
  const $container = $('#matchContainer')
  const $stageName = $('#stageName')
  const matches = stage.matches
  $stageName.el.innerHTML = stage.stageName

  matches[stage.step].forEach(item => {
    ui.idealItem(item.id, item.title, item.image).render($container.el)
  });

  const $$target = $$('.ideal')

  $$target.forEach(el => {
    el.addEventListener('click', function() {
      const id = Number($(el).el.dataset.id)
      const winner = StageManager.getCandidate(id, matches[stage.step])
      const winners = stage.winners

      console.log('winner', winner)

      /* 매치가 끝날 때까지 다음 매치를 렌더링 한다 */
      if(stage.step > matches.length) {
        this.stage.endOfStage()
      } else {
        stage.winners = StageManager.setWinner(winners, winner)
        stage.step = StageManager.nextStep(stage.step)

        console.log(stage.winner, stage.step)
      }
    })
  });
}

export default HandleStage

import StageManager from './StageManager'
import EventManager from './EventManager';

export class Stage {
  constructor(stageName = '', winners = [], eventManager) {
    this.stageName = stageName
    this.candidates = winners
    this.step = 0
    this.winnerList = []
    this.matches = []

    this.eventManager = eventManager

    this.init()
  }

  init() {
    const randomize = this.shuffle(this.candidates)
    this.matches = this.setChunk(randomize, 2)
  }

  /**
   * 후보 목록을 2명씩 짝지어 만든다
   * @return {Array}
   */
  setChunk(arr, n) {
    let results = []
    while (arr.length) {
      results.push(arr.splice(0, n))
    }
    return results
  }

  /**
   * 후보 목록을 랜덤하게 만든다
   * @return {Array}
   */
  shuffle(arr) {
    const newArray = arr.slice()
    const len = newArray.length
    let i = len
    while (i--) {
      const p = parseInt(Math.random() * len)
      const t = newArray[i]
      newArray[i] = newArray[p]
      newArray[p] = t
    }
    return newArray
  }
  setWinner(winner) {
    /* 스테이지가 끝날 때까지 다음 매치를 렌더링 한다 */
    if (this.step == this.matches.length - 1) {
      this.endOfStage()
    } else {
      this.nextMatch(winner)
    }
  }

  nextMatch(winner) {
    this.step = StageManager.nextStep(this.step)
    this.winnerList.push(winner)
    this.renderItems()
  }

  endOfStage() {
    StageManager.setNextWinner(this.winnerList)
    this.eventManager.emit('next')
  }
}

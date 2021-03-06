import StageManager from './StageManager'
import { HandleHistory } from '../handle/HandleHistory';

export class Stage {
  constructor(stageName = '', winners = [], eventManager) {
    this.stageName = stageName
    this.candidates = winners
    this.step = 0
    this.winnerList = []
    this.matches = []

    this.eventManager = eventManager
    this.handleHistory = new HandleHistory(this)

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

  /**
   * nextMatch
   * 스테이지가 끝날 때까지 다음 매치를 렌더링 한다
   * @param winner {Object}
   */
  nextMatch(winner) {
    this.winnerList.push(winner)
    if (this.step > this.matches.length - 1) {
      this.endOfStage()
    } else {
      this.renderItems()
    }
  }

  prevMatch() {
    if(this.step !== 0) {
      this.winnerList.pop()
      this.step = StageManager.prevStep(this.step)
      this.renderItems()
    } else {
      this.eventManager.emit('prev')
    }
  }

  /**
   * 스테이지 끝난 시점의 event emit
   */
  endOfStage() {
    StageManager.setNextWinner(this.winnerList)
    if (this.stageName == '결승') {
      this.eventManager.emit('final')
    } else {
      this.eventManager.emit('next')
    }
  }
}

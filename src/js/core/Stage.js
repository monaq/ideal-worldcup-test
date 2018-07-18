import { Handler } from '../handle/Handler'


export class Stage {
  constructor(stepName = '', winners = []) {
    this.stepName = stepName
    this.candidates = winners
    this.step = 0
    this.matches = []

    this.init()
  }

  init() {
    console.log(this.stepName)
    const randomize = this.shuffle(this.candidates)
    this.matches = this.setChunk(randomize, 2)
    this.Handler = new Handler(this, this.step)
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

  getCurrentCandidate(idx) {
    return this.candidates[idx]
  }
}

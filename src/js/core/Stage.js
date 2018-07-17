export class Stage {
  constructor(step = 0, winners = []) {
    this.step = step
    this.candidates = winners
    this.matches = []

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

  getCurrentCandidate(idx) {
    return this.candidates[idx]
  }
}
